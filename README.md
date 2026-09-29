# sanctions — consolidated sanctions-list reference (OFAC / EU / UN / JP-MOF / UK / AU / CA)

`cloud-itonami/sanctions` holds **two disjoint implementations of one subject** and
**no sanctions data**. It is a reference implementation plus an appview scaffold,
extracted from `etzhayyim/root` on 2026-07-19 and unchanged since.

Read this before `AGENTS.md`. `AGENTS.md` was written for the tree this code was
extracted *from*, and describes files that were not carried across — see
[Corrections](#corrections-to-claudemd) below.

Everything stated here was measured against commit `0090d46` on 2026-08-16. The
commands are in [`docs/operator-quickstart.md`](docs/operator-quickstart.md), which
is walkable end to end.

---

## What is actually in the tree

21 tracked files, in three groups.

| group | files | what it is | runs? |
|---|---|---|---|
| `kotoba/` | 7 | TypeScript reference implementation over AT PDS records | ✅ 4 tests pass, `tsc --noEmit` clean |
| `appview/…/src/` (cljs) + `web/` | shadow-cljs + reagent appview UI (migrated from SvelteKit 2026-09-03); the one screen is the generated placeholder shell | ✅ `amu compile --target wasm32-browser app` → Build completed, 0 errors; renders in Chrome |
| `appview/…/src/app.ts` | 1 | the Worker implementation over SQL tables — **deployed as `wrangler.jsonc` `main` since the svelte→cljs migration** |
| metadata | 6 | `README.edn` (108 B), `AGENTS.md`, `NOTICE`, `migration.edn`, `kotodama.jsonld`, `wrangler.jsonc` | — |

**There are no sanctions lists here.** Zero data files: the only `.json`/`.xml`/`.csv`
in the tree are `package.json` and `tsconfig.json`. The lists are fetched from the
authoritative sources at runtime; none of that fetching code is in this repository
either.

## The two implementations disagree

They share no code and do not agree on the schema. Neither imports the other.

| | `kotoba/src/` | `appview/…/src/app.ts` |
|---|---|---|
| storage | AT PDS records via `@etzhayyim/sdk` | SQL via `createKyselyDb()` |
| entry collection | `com.etzhayyim.apps.sanctions.sanctionEntry` | table `vertex_sanctions_entry` |
| entry name field | `entityName` | `subject_name` |
| entry type field | `entityType` | `subject_type` |
| list field | `listSource` | `list_name` |
| screening | **deliberately absent** | `screenEntity` implemented |

That last row is a live contradiction inside the repository. `kotoba/src/index.ts`
says of screening:

> STAYS etzhayyim, NOT in this package … consumed via consent-capability — **NOT part
> of this package.**

and `types.ts` says "Never migrate it", on the grounds that screening takes
caller-supplied counterparty PII and carries AML / 善管注意義務 liability. `app.ts`,
in this same repository, implements `screenEntity` and writes `vertex_sanctions_match`
rows. Only one of these can be the rule. **Nothing in the tree says which**, and this
README does not decide it — see [ADR-0001](docs/adr/0001-what-this-repository-deploys.md).

## What deploys — and what does not

`kotodama.jsonld` names `src/app.ts` as `component.path`. **Since the svelte→cljs
migration (2026-09-03), `wrangler.jsonc` deploys `main: ./src/app.ts` with static
assets from `web/dist`** — the two are now the same deployed program, resolving the
contradiction described in [ADR-0001](docs/adr/0001-what-this-repository-deploys.md).
(The paragraphs below describe the pre-migration state and are kept as the audit
record of why the deploy target had to change.)

Built from this tree and grepped (quickstart step 4):

| symbol from `app.ts` | occurrences in the deployed bundle |
|---|---|
| `screenEntity` | 0 |
| `vertex_sanctions_entry` | 0 |
| `createKyselyDb` | 0 |
| `@etzhayyim/kotodama-host-sdk` | 0 — not even a dependency of the svelte package |

The deployed worker is the placeholder page plus one XRPC route, which forwards every
call to `https://mcp.etzhayyim.com/xrpc/com.etzhayyim.mcp.message`.

**None of the three hostnames this repository names resolve:**

```
sanctions.etzhayyim.com   NXDOMAIN     ← wrangler route, and the did:web host
sn4c8t1x.etzhayyim.com    NXDOMAIN     ← wrangler route
mcp.etzhayyim.com         NXDOMAIN     ← every XRPC call forwards here
etzhayyim.com             NOERROR      ← the apex does resolve; this is not a network fault
```

So the DID that `types.ts` builds every record identity from —
`did:web:sanctions.etzhayyim.com`, resolved as
`https://sanctions.etzhayyim.com/.well-known/did.json` — **does not resolve today**.
The identifiers are well-formed and internally consistent; they are not currently
dereferenceable.

## Names in this repository outlived their repositories

Three identifiers here point at GitHub names that no longer exist and work only
through GitHub's rename redirect:

| written as | actually served by |
|---|---|
| `etzhayyim/com-etzhayyim-sdk` (dependency pin) | `kotoba-lang/sdk` |
| `etzhayyim/com-etzhayyim-sdk-mock` (dependency pin) | `kotoba-lang/sdk-mock` |
| `etzhayyim/com-etzhayyim-app-sanctions` (`migration.edn` destination) | `cloud-itonami/sanctions` — this repo |

Both dependency pins are full SHAs and both SHAs still exist, so `npm install`
resolves and the tests pass. This is working as the workspace intends — a name is a
discovery alias pinned at registration time, not an identity — but it means the build
depends on a redirect that GitHub maintains and no one here controls. Recorded, not
changed, in [ADR-0001](docs/adr/0001-what-this-repository-deploys.md).

## Authoritative list sources

From the comments in `app.ts`; probed 2026-08-16.

| list | URL | |
|---|---|---|
| OFAC SDN | `https://sanctionslistservice.ofac.treas.gov/api/PublicationPreview/exports/SDN.XML` | 200 |
| OFAC SDN (legacy) | `https://www.treasury.gov/ofac/downloads/sdn.xml` | 200 |
| UN Security Council | `https://scsanctions.un.org/resources/xml/en/consolidated.xml` | 200 |
| JP-MOF FEFTA | `https://www.mof.go.jp/policy/international_policy/gaitame_kawase/gaitame/economic_sanctions/list.html` | 200 |
| EU consolidated | `https://webgate.ec.europa.eu/fsd/fsf/public/files/xmlFullSanctionsList_1_1/content` | **403** — needs a token |

`types.ts` also declares `UK-OFSI`, `AU-DFAT` and `CA-OSFI` as valid `listSource`
values. No URL for any of the three is recorded anywhere in the tree.

## Corrections to `AGENTS.md`

`AGENTS.md` predates the extraction. Three of its claims are not true of this
repository:

| `AGENTS.md` says | in this tree |
|---|---|
| "Manifest-driven (`20-actors/sanctions/actor-manifest.jsonld`)" | no `20-actors/` directory; the only manifest is `appview/…/kotodama.jsonld` |
| "Lexicons `sanctions/` (5 files)" | no lexicon files at all |
| "50K sanctioned entities across OFAC SDN + …" | no entity data; that is a claim about a deployment, not about this tree |

The cross-actor list (`yabai`, `malak`, `legal-entity`, …) is likewise a description
of a wider deployment. The only cross-actor coupling present in code is in `app.ts`,
which reacts to `com.etzhayyim.apps.malak.threatActor` commits — and `app.ts` is not
deployed.

## Licence

Apache-2.0 with the etzhayyim Charter Compliance Rider v3.1 — see `NOTICE`.
The list data itself is government-published open data; the screening function and
its match audit trail are the regulated part, and are not in this package.
