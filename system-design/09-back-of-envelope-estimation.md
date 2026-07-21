# 9. Back-of-Envelope Estimation

Before you can design a system, you need a rough sense of *how big* it
needs to be. Back-of-envelope estimation is the skill of turning "design
Twitter" into concrete numbers: requests per second, storage needed,
expected latency -- using simple assumptions and round numbers, not
precise data you don't have.

## What It Is

- A **napkin-math exercise**: given a few reasonable assumptions (users,
  usage frequency, data size per item), derive rough estimates for
  throughput, storage, and bandwidth.
- The goal isn't precision -- it's getting within the right **order of
  magnitude** so you can make informed design decisions (e.g. "does
  this fit on one server, or do we need sharding?").
- Interviewers care more about your *reasoning process* (stating
  assumptions, showing the calculation) than the exact final number.

## Analogy

> Estimating how many jellybeans are in a jar without counting them
> one by one -- you estimate the jar's volume, estimate a single
> jellybean's volume, and divide. Wildly precise counting isn't the
> point; getting close enough to know "it's roughly 2,000, not 20 or
> 200,000" is what matters, because that number changes what container
   you'd buy.

## How It Works

### Numbers worth memorizing

These let you do most estimation without a calculator:

| Quantity | Rough value |
|---|---|
| 1 million | 10^6 |
| 1 billion | 10^9 |
| Seconds in a day | ~86,400 (~100,000 for quick mental math) |
| Seconds in a month | ~2.6 million |

### Latency numbers every engineer should know (rough orders of magnitude)

| Operation | Latency |
|---|---|
| L1/L2 cache reference | Nanoseconds |
| Main memory (RAM) reference | ~100 ns |
| SSD random read | ~100 microseconds (1,000x slower than RAM) |
| Round trip within the same datacenter | ~0.5 ms |
| Round trip across continents | ~100-150 ms |

The takeaway: memory is fast, disk is much slower, and network round
trips (especially cross-region) dominate latency budgets far more than
raw computation usually does.

### A worked example: "design a URL shortener"

**1. Assumptions (state them explicitly):**
- 100 million new short URLs created per month.
- Read:write ratio of 100:1 (URLs are looked up far more than created).

**2. Write throughput:**
```
100,000,000 writes / month
  ÷ 2,600,000 seconds/month
  ≈ 38 writes/sec (average)
```
Peak traffic is often estimated as 2-5x average, so ~100-200 writes/sec
at peak is a safe planning number.

**3. Read throughput:**
```
38 writes/sec × 100 (read:write ratio) ≈ 3,800 reads/sec
```

**4. Storage:**
```
Assume each record ~500 bytes (short URL, long URL, metadata).
100M new records/month × 500 bytes ≈ 50 GB/month
Over 5 years: 50 GB × 60 months = 3 TB
```

**5. Bandwidth:**
```
3,800 reads/sec × 500 bytes ≈ ~1.9 MB/sec read bandwidth (modest)
```

**Conclusion from the numbers**: 3TB over 5 years and ~4K reads/sec are
both very manageable for a single well-indexed database with caching in
front of it -- this tells you *not* to over-engineer with sharding from
day one, and to spend your design effort instead on the read cache and
the ID-generation scheme.

## Why It Matters

- Estimation is what stops a design from being either wildly
  over-engineered ("we need 50 shards!" for a system that fits on one
  server) or naively under-engineered (missing that a "simple" feature
  is actually a 10TB/month problem).
- It's an explicit, commonly-scored step in system design interviews --
  skipping it (jumping straight to architecture) is one of the most
  common mistakes candidates make.
- The specific numbers matter less than demonstrating you *can*
  produce them and reason about what they imply for the design.

## Quiz

1. Why do interviewers care more about your assumptions and process
   than the exact final number?
   <details><summary>Show answer</summary>
   Because there's no way to know the "real" number without actual
   production data -- the value of the exercise is showing you can
   reason quantitatively about scale and translate that into design
   decisions (e.g. "this needs caching" or "this needs sharding"), not
   in producing a number that happens to match some hidden correct
   answer.
   </details>

2. A system does 10,000 reads/sec, each fetching a 1KB record randomly
   from disk (not cached). Roughly why would you expect this to be a
   latency problem, using the "latency numbers to know" table?
   <details><summary>Show answer</summary>
   A random disk (even SSD) read takes roughly ~100 microseconds versus
   ~100 nanoseconds for RAM -- about 1,000x slower. At 10,000 reads/sec
   hitting disk instead of memory, that latency gap compounds into a
   real, noticeable bottleneck, which is exactly the signal that tells
   you to add a caching layer (see [caching](03-caching.md)) rather
   than just adding more disk-backed servers.
   </details>

3. Why is it useful to estimate *peak* traffic (e.g. 2-5x average)
   rather than only average throughput?
   <details><summary>Show answer</summary>
   Average throughput can badly understate the load a system actually
   needs to handle at its worst moment (e.g. a launch event, a viral
   post, business hours vs. overnight) -- and it's the peak, not the
   average, that determines whether the system falls over. Designing
   only for average load risks an outage exactly when the system
   matters most.
   </details>

4. If storage estimates for a new feature come out to 3TB over 5 years,
   what does that number tell you about whether to shard the database
   from day one?
   <details><summary>Show answer</summary>
   3TB is comfortably within what a single modern database server can
   handle (often tens of TB), so it argues *against* sharding from day
   one -- sharding adds real complexity (see [databases](04-databases.md))
   that isn't justified yet. It's a signal to keep the initial design
   simple and revisit sharding only if/when actual growth outpaces this
   estimate.
   </details>

5. You estimate 4,000 reads/sec for a service. How would you sanity
   check whether that's "a lot" without memorizing exact benchmark
   numbers?
   <details><summary>Show answer</summary>
   Compare it against a rough mental baseline: a single reasonably
   provisioned application server can often handle low thousands to
   tens of thousands of simple requests/sec depending on the work per
   request, and a single well-indexed database can often handle
   similar order-of-magnitude read rates before needing read replicas
   or caching. 4,000 reads/sec is "notable but very manageable" for
   most modern setups -- especially with a cache in front absorbing the
   hottest keys -- rather than a number that immediately demands a
   complex distributed architecture.
   </details>
