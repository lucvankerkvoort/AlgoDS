# 8. API Design: REST vs GraphQL vs RPC, Versioning, Pagination

The API is the contract between client and server -- get this wrong and
every client is stuck with the consequences until you can coordinate a
breaking change across all of them.

## What It Is

- An **API** (application programming interface) here means the
  network-facing contract a service exposes: what requests are valid,
  what shape the responses take.
- Three common styles:
  - **REST**: resources (nouns) exposed at URLs, manipulated via HTTP
    verbs (`GET /users/42`, `POST /orders`). The dominant web API style.
  - **GraphQL**: a single endpoint where clients describe exactly the
    shape of data they want in a query, and the server returns exactly
    that -- no more, no less.
  - **RPC** (Remote Procedure Call, e.g. gRPC): calling a named function
    on a remote server as if it were local (`getUser(42)`), often with a
    strict typed schema (e.g. Protocol Buffers) and binary encoding.

## Analogy

> Ordering food. **REST** is a menu with fixed dishes -- you order "the
> #3 combo" (`GET /combos/3`) and get exactly what's on the menu, even
> if you only wanted the fries. **GraphQL** is telling the chef exactly
> what you want on your plate ("fries, no burger, extra sauce") in one
> order, and getting exactly that back, nothing more. **RPC** is
> calling the kitchen directly and saying "makeBurger(noPickles=true)"
> -- like invoking a specific function, with a strict expected format on
> both ends.

## How It Works

### Comparing the three

| | REST | GraphQL | RPC (e.g. gRPC) |
|---|---|---|---|
| Shape | Resources/URLs + HTTP verbs | Single endpoint, client-specified query | Named functions/methods |
| Over/under-fetching | Common problem (fixed response shape) | Solved by design (ask for exactly what you need) | N/A -- shape is the function's fixed return type |
| Caching | Easy (HTTP caching works naturally) | Harder (single endpoint, POST-based) | Harder (not HTTP-verb based) |
| Best for | Public APIs, CRUD-heavy resources | Clients with varied/nested data needs (e.g. mobile apps aggregating multiple resources) | Internal service-to-service calls, performance-sensitive paths |
| Typical use today | Public-facing web APIs | Frontend-facing aggregation layer | Microservice-to-microservice |

### Versioning

APIs change; clients update at different times. You need a plan so old
clients don't break the moment you ship a change.

- **URL versioning**: `/v1/users`, `/v2/users` -- simple, very visible,
  but can lead to duplicated logic across versions.
- **Header versioning**: `Accept: application/vnd.myapi.v2+json` --
  keeps URLs clean, less discoverable.
- **Additive-only evolution**: avoid versioning entirely by only ever
  *adding* optional fields, never removing or repurposing existing
  ones -- old clients ignore fields they don't understand, new clients
  use the new ones. Works well for a while, eventually you still need a
  real breaking version bump.

### Pagination

Returning "all the results" doesn't scale -- you need to hand back data
in pages.

- **Offset-based**: `?page=3&limit=20` (or `?offset=40&limit=20`).
  Simple, but if items are inserted/deleted between page requests,
  results can shift or duplicate -- and `OFFSET` gets slower on large
  offsets (the database still has to scan past all skipped rows).
- **Cursor-based**: `?after=<opaque_cursor>&limit=20`, where the cursor
  encodes "where I left off" (often an ID or timestamp). Stable even as
  data changes, and doesn't degrade with large offsets -- the standard
  choice for infinite-scroll feeds.

```
Offset pagination:  page=3 -> skip 40 rows, take next 20   (drifts if rows change)
Cursor pagination:  after=item_582 -> take next 20 after that specific item  (stable)
```

## Why It Matters

- Picking REST vs GraphQL vs RPC is a real architectural decision, not
  a matter of taste -- it should follow from who's consuming the API and
  what their data-shape needs are.
- Forgetting a versioning strategy is a common real-world pain point:
  once clients (especially mobile apps you don't control the update
  cadence for) depend on a response shape, changing it without a plan
  breaks them silently.
- Pagination design directly affects both correctness (does the feed
  skip/duplicate items as data changes?) and performance (does the
  query get slower as users page deeper?) -- interviewers will often
  probe "what happens on page 500?"

## Quiz

1. A mobile app screen needs data from three different REST resources
   (user profile, their recent orders, and their loyalty points),
   requiring three round trips. How does GraphQL address this?
   <details><summary>Show answer</summary>
   GraphQL lets the client describe a single query asking for exactly
   the fields it needs across all three logical resources, and the
   server resolves them together, returning one response -- collapsing
   three round trips into one and avoiding both the extra network
   overhead and any over-fetching from rigid REST resource shapes.
   </details>

2. Why is HTTP caching "easy" for REST but harder for a typical GraphQL
   setup?
   <details><summary>Show answer</summary>
   REST maps naturally onto HTTP semantics -- a `GET /users/42` has a
   stable URL that HTTP caches (browsers, CDNs) can key on. GraphQL
   typically uses a single endpoint with `POST` requests carrying a
   query in the body, so there's no simple URL to cache against;
   caching GraphQL responses requires additional tooling (e.g. caching
   at the query/response level, or per-field caching) rather than
   relying on standard HTTP caching.
   </details>

3. You ship a breaking API change (renaming a field). What are two
   different strategies to avoid breaking existing clients
   immediately, and what's the tradeoff of each?
   <details><summary>Show answer</summary>
   (a) URL/header versioning: release `/v2/` with the new shape, keep
   `/v1/` running for existing clients -- tradeoff is maintaining two
   versions of logic until old clients migrate. (b) Additive-only
   change: keep the old field, add the new one alongside it -- tradeoff
   is a growing, messier schema over time and eventually you still need
   a real deprecation plan for the old field.
   </details>

4. Why does offset-based pagination risk showing duplicate or skipped
   items on an actively-changing list (like a live feed), and how does
   cursor-based pagination avoid it?
   <details><summary>Show answer</summary>
   Offset pagination is based on position ("skip the first 40"), so if
   an item is inserted or deleted between page requests, every
   subsequent item's position shifts -- causing the next page to
   duplicate an item you already saw, or skip one you haven't.
   Cursor-based pagination anchors to a specific item ("give me items
   after item_582"), which stays stable regardless of insertions or
   deletions elsewhere in the list.
   </details>

5. Why does `OFFSET 100000 LIMIT 20` tend to get slower as the offset
   grows, even though it only returns 20 rows?
   <details><summary>Show answer</summary>
   Most databases implement `OFFSET` by scanning through and discarding
   the skipped rows before returning the requested page -- so `OFFSET
   100000` still does the work of walking past 100,000 rows internally,
   even though none of them are returned. Cursor-based pagination
   avoids this because it can jump directly to the right starting point
   via an index, without scanning past everything before it.
   </details>
