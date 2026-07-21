# 7. Rate Limiting & Throttling

Rate limiting is how a system protects itself from being overwhelmed --
whether by a buggy client, a traffic spike, or someone deliberately
hammering it.

## What It Is

- **Rate limiting**: capping how many requests a client (or the system
  as a whole) can make in a given time window, and rejecting/delaying
  the rest.
- **Throttling**: a closely related term, often used interchangeably --
  sometimes distinguished as "slowing down" (throttling) vs "hard
  cutoff" (rate limiting), but in practice most people use them as
  synonyms.
- Applied at many levels: per-user (API keys), per-IP, per-endpoint, or
  globally across the whole service.

## Analogy

> A nightclub bouncer with a fixed room capacity. Once the room is at
> capacity, the bouncer stops letting people in until someone leaves --
> not because the extra people are bad, but because the room (server)
> physically can't hold more without becoming unsafe (crashing or
> degrading for everyone already inside).

## How It Works

### Common algorithms

| Algorithm | How it works | Characteristic |
|---|---|---|
| Fixed window | Count requests in a fixed time bucket (e.g. per minute); reset each new window | Simple, but allows bursts at window boundaries (2x limit possible right at the edge) |
| Sliding window | Like fixed window, but the window "slides" continuously rather than resetting abruptly | Smooths out the boundary-burst problem, more accurate |
| Token bucket | Bucket holds tokens, refilled at a steady rate; each request consumes a token; empty bucket = rejected | Allows short bursts (if bucket is full) while enforcing an average rate |
| Leaky bucket | Requests queue up and are processed ("leak out") at a constant rate | Smooths bursts into a steady output rate, at the cost of added latency |

```
Token bucket:
  [🪙🪙🪙🪙🪙] <- refills at N tokens/sec
       |
  request consumes 1 token --> allowed
  bucket empty --> request rejected (429 Too Many Requests)
```

### Where it's enforced

- **Client-side**: cooperative, but can't be trusted (a malicious or
  buggy client can just ignore it).
- **Gateway / load balancer level**: enforced centrally before requests
  even reach application servers -- most common and most robust
  placement.
- **Application level**: per-endpoint or per-user-action limits that
  need business logic awareness (e.g. "max 5 password reset attempts
  per hour").

### What happens when a client is limited

- Typically respond with **HTTP 429 Too Many Requests**.
- Good practice: include a `Retry-After` header so well-behaved clients
  know when to try again, rather than immediately retrying and making
  things worse.

## Why It Matters

- Rate limiting is what keeps one noisy client (buggy retry loop,
  scraper, malicious actor) from degrading service for everyone else --
  it's a fairness and stability mechanism, not just a security one.
- It's a frequent standalone interview question ("design a rate
  limiter") *and* a component interviewers expect you to mention when
  designing any public API.
- Choosing token bucket vs sliding window is a real, defensible
  tradeoff to discuss: token bucket tolerates bursts (good for
  legitimate spiky usage), sliding window enforces a stricter, smoother
  average.

## Quiz

1. What's the specific flaw in fixed-window rate limiting that sliding
   window fixes?
   <details><summary>Show answer</summary>
   With a fixed window (e.g. "100 requests per minute, resetting on the
   minute"), a client can send 100 requests in the last second of one
   window and another 100 in the first second of the next window --
   200 requests in ~2 seconds, technically staying "within limit" each
   window. Sliding window avoids this by continuously evaluating a
   rolling time range instead of resetting abruptly at fixed
   boundaries.
   </details>

2. Why does token bucket allow bursts while still enforcing a long-term
   average rate?
   <details><summary>Show answer</summary>
   Tokens accumulate in the bucket during idle periods (up to its
   capacity), so if a client has been quiet, it can spend a burst of
   saved-up tokens all at once. But once the bucket is empty, requests
   are limited by the refill rate -- so *over time*, the average
   throughput is capped at the refill rate even though short bursts are
   allowed.
   </details>

3. Where should a rate limiter live if you want to protect application
   servers from being overwhelmed in the first place, and why not just
   put it in each application server?
   <details><summary>Show answer</summary>
   At the gateway/load-balancer layer, before requests reach the
   application servers -- that way, rejected requests never even
   consume application server resources. If each application server
   enforces its own limit independently, a client could still overwhelm
   the fleet in aggregate (each individual server thinks it's under its
   own limit) unless the limit state is shared/coordinated across
   servers, which adds complexity the gateway approach avoids.
   </details>

4. Why is returning a `Retry-After` header considered good practice
   when responding with 429?
   <details><summary>Show answer</summary>
   It tells well-behaved clients exactly when it's safe to retry,
   discouraging them from hammering the endpoint with immediate
   retries (which would just get rate-limited again and add more load
   for no benefit). It's a cooperative signal that helps the system
   recover instead of prolonging the overload.
   </details>

5. Leaky bucket and token bucket are often confused. What's the key
   difference in what they optimize for?
   <details><summary>Show answer</summary>
   Token bucket controls how many requests are *allowed in*, permitting
   bursts up to the bucket's capacity while capping the average rate.
   Leaky bucket controls the *outflow* rate -- incoming requests queue
   up and are processed at a strictly constant rate regardless of how
   bursty the input was, smoothing bursts into steady, predictable
   output at the cost of added queuing latency for requests that arrive
   in a burst.
   </details>
