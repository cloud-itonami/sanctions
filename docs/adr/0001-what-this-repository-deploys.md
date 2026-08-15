# ADR-0001 — The docs describe the tree, not the deployment

- **Status**: accepted
- **Date**: 2026-08-16
- **Applies to**: `README.md`, `docs/operator-quickstart.md`
- **Supersedes**: nothing. `CLAUDE.md` is left in place unchanged.

## Context

This repository was extracted from `etzhayyim/root@168497bd` on 2026-07-19 and has
not been touched since. It had no `README.md` — `README.edn` is 108 bytes of schema
metadata — so the only prose about it was `CLAUDE.md`, which came across from the
source tree and describes that tree.

Three of `CLAUDE.md`'s claims are not true of these 21 files: it points at
`20-actors/sanctions/actor-manifest.jsonld` (no such directory), at five lexicon
files under `sanctions/` (none present), and at "50K sanctioned entities" (no data
files at all). Those statements were probably accurate about the deployment they
were written for.

Writing a `README.md` therefore forced a choice about what the documentation is a
description *of*.

## Decision

**The prose in this repository describes what is in the tree, measured, and says so
where that contradicts `CLAUDE.md`.**

Three consequences, stated so they are not "corrected" back later:

1. **`CLAUDE.md` stays as it is, and is not the inventory.** It is a useful record
   of intent for a wider system. `README.md` carries a table of the specific claims
   that do not hold here. Deleting or rewriting `CLAUDE.md` would destroy the only
   surviving description of what this actor is for; leaving it as the first thing a
   reader meets would keep costing them the hour it costs to discover the gap.

2. **Two contradictory implementations are reported, not reconciled.**
   `kotoba/src/index.ts` states that screening "STAYS etzhayyim, NOT in this
   package … Never migrate it", on the grounds that it takes counterparty PII and
   carries AML / 善管注意義務 liability. `appview/…/src/app.ts`, in this repository,
   implements `screenEntity` and writes `vertex_sanctions_match` rows. The two use
   different storage and disagree on every field name.

   This is a compliance boundary, and it is not a documentation loop's call to
   decide which side is right. Both are described; neither is edited.

3. **Every failure mode named in the quickstart was reproduced first.** No step says
   "should work". Where something is broken, the doc says which of "we tried it and
   it failed" versus "we could not try it" applies — the two are not the same
   evidence and are not written the same way.

## What is reported and left open

These are findings, not decisions. They need an owner this repository does not name.

| finding | evidence | why it is left open |
|---|---|---|
| `sanctions.etzhayyim.com`, `sn4c8t1x.etzhayyim.com` and `mcp.etzhayyim.com` are all NXDOMAIN, while the apex resolves | `dig @1.1.1.1`, 2026-08-16 | needs whoever owns the `etzhayyim.com` zone. Also means `did:web:sanctions.etzhayyim.com` — the root of every record identity in `types.ts` — does not dereference |
| `kotodama.jsonld` names `src/app.ts` as `component.path`; `wrangler.jsonc` deploys the SvelteKit build, which contains none of it | built the tree, grepped `.svelte-kit/output` and `.svelte-kit/cloudflare` for `screenEntity`, `vertex_sanctions`, `createKyselyDb`, `kotodama-host-sdk` → 0 files each | fixing it means choosing which of the two implementations is the service. That is finding 2 |
| both dependency pins, and this repository's own recorded destination, name GitHub repositories that no longer exist and resolve only through the rename redirect | `git ls-remote https://github.com/etzhayyim/com-etzhayyim-sdk.git` → `e8a40b5`; both pinned SHAs resolve under `kotoba-lang/sdk` and `kotoba-lang/sdk-mock` | **working as intended, and deliberately not changed.** The workspace rule is that a repository name is a discovery alias pinned at registration time, not an identity, and that a domain or name move is not a reason to rewrite pins. Recorded because the build now depends on a redirect nobody here controls |
| `npm install` fails on any workstation whose `~/.npmrc` sets `allow-scripts[]` | reproduced on npm 11.16.0 and 11.17.0; succeeds with `--userconfig` empty, and on fleet node `judah` where the setting is absent | an npm behaviour, not a repository defect. The workaround is in quickstart step 0 so the next reader does not spend the time twice |

## Consequences

A reader who opens `README.md` learns in one screen that there is no data here, that
two implementations disagree, and that the deployed artifact is not the file the
manifest names. Previously each of those cost an independent investigation.

The cost is that this repository now contains prose that visibly contradicts
`CLAUDE.md`. That contradiction is the honest state; hiding it would mean choosing
which document to make silently wrong.
