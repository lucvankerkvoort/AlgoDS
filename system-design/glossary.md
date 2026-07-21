# System Design Glossary

Concise definitions of terms used across this track, alphabetized for
quick lookup. Each links back to the topic file that covers it in
depth.

---

**API (Application Programming Interface)**
The contract a service exposes for clients to interact with it --
what requests are valid and what shape the responses take. See
[API design](08-api-design.md).

**At-least-once delivery**
A messaging guarantee that a message will be delivered one or more
times (never zero), but might be duplicated. Usually paired with
idempotent consumers. See [message queues](06-message-queues.md).

**Availability**
The property that a system keeps responding to requests, even during
failures (possibly with stale data). See [CAP theorem](05-consistency-models.md).

**AP system**
A system that, during a network partition, chooses availability over
strict consistency. See [consistency models](05-consistency-models.md).

**Backpressure**
Signaling upstream (producer) that a downstream (consumer) is
overwhelmed, so the producer slows down instead of piling up
unbounded work. See [message queues](06-message-queues.md).

**Bloom filter**
A space-efficient probabilistic data structure that answers "have I
probably seen this before?" with no false negatives but occasional
false positives. Used for cheap duplicate-checking at scale.

**CAP theorem**
During a network partition, a distributed system must choose between
Consistency and Availability (Partition tolerance isn't optional in
real networks). See [consistency models](05-consistency-models.md).

**Cache**
A store that keeps a copy of data that's expensive to fetch/compute,
so repeated requests can be served faster. See [caching](03-caching.md).

**Cache-aside (lazy loading)**
A caching pattern: check the cache first; on a miss, read from the
source of truth and populate the cache for next time. See
[caching](03-caching.md).

**Cache invalidation**
The process of removing or updating stale cache entries when the
underlying data changes. See [caching](03-caching.md).

**Consistent hashing**
A hashing scheme that maps both nodes and keys onto a conceptual ring,
so adding/removing a node only reshuffles a small fraction of keys
(unlike naive modulo hashing). See [design a key-value store](practice-problems/design-key-value-store.md).

**CP system**
A system that, during a network partition, chooses consistency over
availability (may refuse/error requests rather than risk stale data).
See [consistency models](05-consistency-models.md).

**CDN (Content Delivery Network)**
A geographically distributed network of servers that cache content
close to users, reducing latency for static (and sometimes dynamic)
content. See [caching](03-caching.md).

**Cursor-based pagination**
Paginating by anchoring to a specific item ("give me results after
item X") rather than by numeric position -- stable even as the
underlying data changes. See [API design](08-api-design.md).

**Eventual consistency**
A guarantee that all replicas will converge to the same value given
enough time with no new writes, but offers no guarantee about *when*,
or that any single read sees the latest write. See
[consistency models](05-consistency-models.md).

**Event-driven architecture**
A design style where services communicate by publishing and
subscribing to events rather than calling each other directly. See
[message queues](06-message-queues.md).

**Fan-out**
Distributing a single piece of work or data to many destinations at
once (e.g. pushing a new post to all of a user's followers' feeds).
See [design a news feed](practice-problems/design-news-feed.md).

**Health check**
A periodic probe a load balancer (or orchestrator) sends to a server
to confirm it's still able to handle traffic, pulling it from
rotation if it fails. See [load balancing](02-load-balancing.md).

**Horizontal scaling (scale out)**
Handling more load by adding more machines, distributing work across
them. See [scalability patterns](10-scalability-patterns.md).

**Idempotency**
The property that performing an operation multiple times has the same
effect as performing it once -- critical for safely retrying requests
or messages. See [client-server basics](01-client-server-basics.md)
and [message queues](06-message-queues.md).

**Index (database)**
A separate data structure (often a B-tree) that maps column values to
rows, letting queries avoid scanning every row. Speeds up reads, costs
extra storage and slower writes. See [databases](04-databases.md).

**Latency**
The time it takes for a single request to receive its response. See
[client-server basics](01-client-server-basics.md).

**Leader-follower replication**
A replication setup where one server (leader) accepts writes and
streams them to one or more followers, which typically serve reads.
See [databases](04-databases.md).

**Load balancer (LB)**
A component that distributes incoming requests across a pool of
backend servers. See [load balancing](02-load-balancing.md).

**L4 load balancing**
Load balancing based only on transport-layer information (IP, port) --
fast but protocol-unaware. See [load balancing](02-load-balancing.md).

**L7 load balancing**
Load balancing based on application-layer information (HTTP path,
headers, cookies) -- more flexible, more CPU per request. See
[load balancing](02-load-balancing.md).

**LRU / LFU (cache eviction)**
Least Recently Used / Least Frequently Used -- common policies for
deciding which cache entry to evict when the cache is full. See
[caching](03-caching.md).

**Message queue**
A durable buffer that decouples producers (who create work) from
consumers (who process it), letting them operate at different speeds
without direct coordination. See [message queues](06-message-queues.md).

**Microservices**
An architecture where an application is split into independently
deployable services, usually communicating over the network. See
[scalability patterns](10-scalability-patterns.md).

**Monolith**
An application built and deployed as a single unit. See
[scalability patterns](10-scalability-patterns.md).

**NoSQL**
An umbrella term for non-relational databases (key-value, document,
wide-column, graph), generally trading strict schema/relational
guarantees for flexibility and horizontal scalability. See
[databases](04-databases.md).

**Offset-based pagination**
Paginating by numeric position (`?page=3&limit=20`) -- simple but can
drift (duplicate/skip items) if data changes between requests, and
slows down at large offsets. See [API design](08-api-design.md).

**Partition (network)**
A failure where parts of a distributed system can't communicate with
each other, even though each part may still be individually healthy.
See [consistency models](05-consistency-models.md).

**Partition (database) / Sharding**
Splitting a dataset across multiple database servers, where each
shard holds a different subset of the data. See [databases](04-databases.md).

**Producer / Consumer**
In a message queue, the producer creates/publishes messages; the
consumer receives and processes them. See [message queues](06-message-queues.md).

**Pub/sub (publish/subscribe)**
A messaging pattern where a published message is delivered
independently to every subscriber of a topic, rather than to just one
consumer. See [message queues](06-message-queues.md).

**Quorum**
Requiring acknowledgment from a majority of replicas (rather than all
or just one) for a read or write, balancing consistency and
availability. See [consistency models](05-consistency-models.md).

**Rate limiting**
Capping how many requests a client can make in a given time window,
rejecting or delaying the rest. See [rate limiting](07-rate-limiting.md).

**Replication**
Copying data across multiple servers so no single server failure
loses data or takes down reads. See [databases](04-databases.md).

**REST (Representational State Transfer)**
An API style where resources are exposed at URLs and manipulated via
HTTP verbs (GET, POST, PUT, DELETE). See [API design](08-api-design.md).

**RPC (Remote Procedure Call)**
An API style where a client calls a named function on a remote server
as if it were local, often with a strict typed schema (e.g. gRPC). See
[API design](08-api-design.md).

**Sharding**
See *Partition (database)*.

**Statelessness**
Designing servers to hold no client-specific data between requests,
so any server can handle any request -- the property that makes
horizontal scaling straightforward. See
[scalability patterns](10-scalability-patterns.md) and
[client-server basics](01-client-server-basics.md).

**Strong consistency**
A guarantee that every read sees the most recent write, everywhere,
immediately. See [consistency models](05-consistency-models.md).

**Throughput**
How many requests a system can process per unit of time. See
[client-server basics](01-client-server-basics.md).

**TLS handshake**
The negotiation of encryption keys between client and server at the
start of an HTTPS connection. See [client-server basics](01-client-server-basics.md).

**Token bucket**
A rate-limiting algorithm where a bucket of tokens refills at a steady
rate and each request consumes one, allowing short bursts while
capping the long-term average rate. See [rate limiting](07-rate-limiting.md).

**Topic**
In pub/sub messaging, the named channel that producers publish to and
consumers subscribe to. See [message queues](06-message-queues.md).

**Vertical scaling (scale up)**
Handling more load by making a single server more powerful (more CPU,
RAM, faster disk). See [scalability patterns](10-scalability-patterns.md).

**Write-through / write-behind**
Caching write strategies: write-through updates cache and source of
truth synchronously (fresher, slower); write-behind writes to cache
immediately and flushes to the source of truth later (faster, riskier).
See [caching](03-caching.md).
