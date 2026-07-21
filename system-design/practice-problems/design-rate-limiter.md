# Design a Rate Limiter

A meta problem: you're designing the very mechanism [described in the
rate limiting topic](../07-rate-limiting.md), as a standalone,
reusable system.

## The Prompt

Design a rate limiter that can be dropped in front of any API to limit
each client to N requests per time window, and reject the rest with
`429 Too Many Requests`.

## Clarifying Questions to Ask First

- Is the limit per user, per IP, per API key, or global?
- Does the limit need to be enforced across a *fleet* of servers
  (shared state), or is per-server enforcement acceptable?
- What's an acceptable margin of error? (Strict exactness vs "close
  enough")
- Should different endpoints have different limits (e.g. login attempts
  limited more strictly than read-only endpoints)?
- What should happen to rejected requests -- immediate rejection, or
  queued and delayed?

## Your Approach

_Write your own design here before looking at the reference approach
below._

```
(your notes)
```

## Reference Approach

<details>
<summary>Show reference approach</summary>

**Algorithm choice**

Token bucket is the most commonly recommended default: it allows
legitimate short bursts (a user who was idle for a while can make a
quick flurry of requests) while still enforcing a strict long-term
average rate. Sliding window log/counter is the fallback if you need
stricter, smoother enforcement.

**Where state lives (the hard part)**

- If limiting only needs to be "roughly right" and can be per-server:
  keep counters in local memory per server. Simple, but a client
  spreading requests across multiple servers effectively multiplies
  their limit by the number of servers.
- For a real limit across a fleet: store counters in a shared,
  fast store -- typically Redis, since it supports atomic
  increment-and-check operations (`INCR` + `EXPIRE`) with very low
  latency.

**Data model in Redis (token bucket, simplified)**

```
key: rate_limit:{user_id}
value: { tokens_remaining, last_refill_timestamp }
```

On each request:
1. Compute how many tokens should have been refilled since
   `last_refill_timestamp` (based on elapsed time × refill rate).
2. Add those tokens (capped at bucket capacity), update the timestamp.
3. If `tokens_remaining >= 1`: decrement, allow the request.
4. Else: reject with 429 (+ `Retry-After` header).

This needs to be atomic (read-modify-write as one operation, e.g. a Lua
script in Redis) to avoid race conditions between concurrent requests
from the same client.

**Where it's enforced**

At the API gateway / load balancer layer, before requests reach
application servers -- so rejected traffic never consumes application
compute. See [rate limiting](../07-rate-limiting.md) for why this
placement matters.

**Scaling the rate limiter itself**

- A single Redis instance can become a bottleneck at very high scale;
  options include sharding the rate-limit keys across multiple Redis
  instances (by hashing user ID), or accepting slightly relaxed
  accuracy with local per-server counters plus periodic synchronization.

**Edge cases worth raising**

- Clock skew across servers if timestamps are used for window
  calculations.
- What happens during a Redis outage -- fail open (allow all requests,
  risking overload) or fail closed (reject all requests, risking a
  false outage)? This is a real product decision, not just a technical
  one.

</details>
