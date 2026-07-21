# Design a URL Shortener

The classic first system design problem -- small enough to fully design
in an interview, but touches nearly every fundamental topic.

## The Prompt

Design a service like bit.ly: users submit a long URL and get back a
short one (e.g. `short.ly/aZ9kQ`); visiting the short URL redirects to
the original long URL.

## Clarifying Questions to Ask First

- What's the expected scale? (URLs created per day, read:write ratio --
  see [back-of-envelope estimation](../09-back-of-envelope-estimation.md))
- Do short URLs need to be *guessable-resistant*, or is predictability
  fine?
- Can users choose a custom alias (`short.ly/my-brand`), or are all
  short codes generated?
- Do short URLs expire, or last forever?
- Do we need click analytics (count, referrer, location)?
- Is a redirect expected to be a 301 (permanent) or 302 (temporary)
  redirect? (This affects browser caching behavior.)

## Your Approach

_Write your own design here before looking at the reference approach
below -- what would you sketch on a whiteboard first?_

```
(your notes)
```

## Reference Approach

<details>
<summary>Show reference approach</summary>

**API**
- `POST /shorten { long_url }` → `{ short_url }`
- `GET /{short_code}` → `302 Found` with `Location: <long_url>`

**Core design decision: how to generate the short code**
- Option A: hash the long URL (e.g. MD5) and take the first 7 characters
  -- simple, but collisions need handling (retry with a salt).
- Option B: a counter (auto-incrementing ID) converted to base62 --
  guarantees uniqueness, no collision handling needed, but requires a
  centralized counter (or pre-allocated ID ranges per server to avoid a
  single point of contention).
- Preferred: base62-encoded counter with pre-allocated ID *ranges*
  handed out to each server (e.g. server A gets IDs 1-1000, server B
  gets 1001-2000), avoiding both collisions and a shared bottleneck.

**Data model**
- A single table/collection: `short_code -> long_url, created_at,
  (optional) expires_at, click_count`.
- Primary access pattern is a point lookup by `short_code` -- a simple
  key-value store or an indexed SQL table both work well (see
  [databases](../04-databases.md)).

**Read path (the hot path)**
- Reads (redirects) vastly outnumber writes (see estimation file) --
  put a cache (Redis) in front of the database keyed by `short_code`,
  since this is a classic cache-aside read pattern (see
  [caching](../03-caching.md)).
- A CDN can even cache redirect responses for anonymous, non-expiring
  short URLs.

**Write path**
- Generate the code (base62 counter), write to DB, optionally seed the
  cache immediately (write-through) since the URL is likely to be
  clicked soon after creation.

**Scale numbers (worked in the estimation doc)**
- Storage is modest (a few TB over years) -- a single well-indexed
  database is fine; no need to shard from day one.
- If it did need to shard, `short_code` (or a hash of it) is a natural
  shard key, since all lookups are by that key.

**Things worth mentioning even if not asked**
- Rate limit the `/shorten` endpoint to prevent abuse (spam link
  generation) -- see [rate limiting](../07-rate-limiting.md).
- 301 vs 302: 302 (temporary) is usually preferred despite more server
  load, because 301 gets cached by browsers, making click analytics
  impossible to track after the first visit.

</details>
