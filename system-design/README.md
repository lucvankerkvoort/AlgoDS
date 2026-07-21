# System Design

A parallel learning track to the algorithms/data-structures practice in
this repo -- same goal (interview readiness), different muscle: instead
of implementing an algorithm, you're reasoning about tradeoffs at the
scale of whole systems.

No prior system design background assumed. Each topic file is written
for someone comfortable with software engineering generally, but new to
this specific vocabulary.

## How to use this track

1. Work through the topics in the suggested order below -- each builds
   on vocabulary from the ones before it.
2. Each topic file ends with a handful of quiz questions; answers are
   in collapsible `<details>` sections so you can self-check without
   accidentally reading ahead.
3. Once you've covered the fundamentals, move to
   [`practice-problems/`](practice-problems/) and work through the
   classic interview questions -- write your own approach before
   revealing the reference approach.
4. Use [`glossary.md`](glossary.md) any time you hit an unfamiliar term
   and don't want to go find the whole topic file.
5. Check off topics as you complete them by editing this file (`[ ]` →
   `[x]`).

## Topics (suggested learning order)

- [ ] [1. Client-Server Basics & the Request Lifecycle](01-client-server-basics.md)
      -- what actually happens between clicking a link and seeing a page.
- [ ] [2. Load Balancing](02-load-balancing.md)
      -- distributing traffic across many servers once one isn't enough.
- [ ] [3. Caching](03-caching.md)
      -- remembering answers so you don't redo expensive work, at every layer.
- [ ] [4. Databases: SQL vs NoSQL, Indexing, Replication, Sharding](04-databases.md)
      -- where data lives, how it's found fast, and how it survives growth and failure.
- [ ] [5. Consistency Models: CAP Theorem, Strong vs Eventual](05-consistency-models.md)
      -- what a system promises you when data lives in more than one place.
- [ ] [6. Message Queues & Async Processing](06-message-queues.md)
      -- decoupling producers from consumers; pub/sub and event-driven design.
- [ ] [7. Rate Limiting & Throttling](07-rate-limiting.md)
      -- protecting a system from being overwhelmed by any one client.
- [ ] [8. API Design: REST vs GraphQL vs RPC, Versioning, Pagination](08-api-design.md)
      -- the contract between client and server, and how it evolves safely.
- [ ] [9. Back-of-Envelope Estimation](09-back-of-envelope-estimation.md)
      -- napkin math for throughput, storage, and latency before you design anything.
- [ ] [10. Scalability Patterns: Vertical vs Horizontal, Statelessness, Microservices vs Monoliths](10-scalability-patterns.md)
      -- tying it all together into "how does this grow."

## Practice problems

Classic system design interview questions. Each has a prompt,
clarifying questions to ask before designing, space to write your own
approach, and a reference approach hidden behind a spoiler tag.

- [ ] [Design a URL Shortener](practice-problems/design-url-shortener.md)
- [ ] [Design a Rate Limiter](practice-problems/design-rate-limiter.md)
- [ ] [Design a Chat Application](practice-problems/design-chat-app.md)
- [ ] [Design a News Feed](practice-problems/design-news-feed.md)
- [ ] [Design a Notification System](practice-problems/design-notification-system.md)
- [ ] [Design a Distributed Key-Value Store](practice-problems/design-key-value-store.md)
- [ ] [Design a Web Crawler](practice-problems/design-web-crawler.md)

## Reference

- [`glossary.md`](glossary.md) -- alphabetized quick-lookup definitions
  of every key term across the topics above.
