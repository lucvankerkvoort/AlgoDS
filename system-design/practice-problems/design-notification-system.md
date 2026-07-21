# Design a Notification System

A good test of async processing, fan-out, and dealing with multiple
external, unreliable third parties (push providers, email providers,
SMS gateways).

## The Prompt

Design a system that sends notifications (push, email, SMS) triggered
by events elsewhere in the product (e.g. "someone liked your post,"
"your order shipped"), to potentially millions of users.

## Clarifying Questions to Ask First

- Which channels: push, email, SMS, in-app -- all of them?
- Can a user configure preferences (e.g. "email me for orders, push me
  for likes")?
- Do notifications need to be deduplicated (e.g. 50 likes in a minute
  → one grouped notification, not 50)?
- What's the tolerance for delay -- is a few seconds fine, or does
  anything need to be near-instant?
- Do we need delivery guarantees/tracking (did the user actually see
  it)?
- Expected scale: events/sec that could trigger notifications.

## Your Approach

_Write your own design here before looking at the reference approach
below._

```
(your notes)
```

## Reference Approach

<details>
<summary>Show reference approach</summary>

**High-level flow**

```mermaid
flowchart LR
    E[Event: "order shipped"] --> Q[(Event Queue)]
    Q --> W[Notification Worker]
    W --> Pref{Check user\npreferences}
    Pref -->|push enabled| Push[Push Provider: APNs/FCM]
    Pref -->|email enabled| Email[Email Provider]
    Pref -->|SMS enabled| SMS[SMS Gateway]
```

**Why this is fundamentally an async, event-driven system**

- Whatever triggers a notification (a like, an order status change)
  shouldn't be slowed down waiting for notification delivery, and
  delivery itself depends on third-party providers that can be slow or
  flaky. This is exactly the case for [message queues and async
  processing](../06-message-queues.md): the triggering service
  publishes an event and moves on; a separate worker fleet consumes it.

**Fan-out and deduplication**

- For events that could affect many notifications at once (e.g. a
  broadcast announcement to all users), fan the event out to a queue
  per batch of recipients, processed by a pool of workers -- similar
  fan-out concerns as the [news feed problem](design-news-feed.md).
- For deduplication/grouping (50 likes → 1 notification): buffer events
  for a short window (e.g. a few minutes) per user+type, and coalesce
  before sending -- trading a small delay for a much better user
  experience (avoiding notification spam).

**Respecting user preferences**

- A preferences table/store (`user_id -> {push: true, email: false,
  sms: false, ...}` per notification type) is checked before choosing
  which channel(s) to fan out to. This is a simple key lookup, cacheable
  like any other read-heavy, rarely-changing data (see
  [caching](../03-caching.md)).

**Reliability with unreliable third parties**

- Each channel-specific send (push/email/SMS) should be retried with
  backoff on failure, since third-party providers routinely have
  transient failures.
- Because retries can cause the same notification to be sent twice, the
  send operation should be idempotent -- e.g. track a unique
  notification ID and check "have I already sent this one?" before
  actually calling the provider, consistent with the at-least-once +
  idempotent-consumer pattern from [message queues](../06-message-queues.md).

**Delivery tracking**

- If required, record a status per notification (`queued -> sent ->
  delivered -> opened`), updated as providers send delivery webhooks
  (for push/email) -- this itself is a write-heavy, mostly
  fire-and-forget stream, suggesting eventual consistency
  ([consistency models](../05-consistency-models.md)) is perfectly fine
  for the tracking data, even though the notification send itself
  should be reliable.

**Scale considerations**

- Notification volume can spike dramatically around specific events
  (e.g. a viral post) -- the queue absorbs the burst, and worker fleet
  size (and provider-side rate limits) determines how quickly the
  backlog drains. Consider [rate limiting](../07-rate-limiting.md)
  outbound calls to third-party providers, since they often enforce
  their own limits on you.

</details>
