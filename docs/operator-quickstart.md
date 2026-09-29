# Operator quickstart

Two things run in this repository: a TypeScript reference implementation
(`kotoba/`) and a SvelteKit appview. Both work. Neither one is a sanctions
screening service you can call — see [what you cannot do](#5--what-you-cannot-do-from-this-tree).

Every step below was run against commit `0090d46` on 2026-08-16 on macOS 25.3
(darwin arm64), Node v26.3.0 / npm 11.16.0. Steps are marked ✅ where the output
shown is the output observed. **Read [step 0](#0-before-npm-install--) first** —
without it `npm install` fails on this workstation and the failure does not name
its own cause.

---

## 0. Before `npm install` ✅

`npm install` here fails with an error that blames the dependency:

```
npm error code 1
npm error git dep preparation failed
npm error npm error code EALLOWSCRIPTS
npm error npm error --allow-scripts is not allowed in project-scoped installs.
npm error npm error Add the entries to the "allowScripts" field in package.json, or to .npmrc, instead.
```

**The cause is your `~/.npmrc`, not this repository.** If it contains any
`allow-scripts[]=…` line, npm passes `--allow-scripts` down into the subprocess it
uses to prepare git dependencies, and that subprocess rejects the flag. Both
dependencies of `kotoba/` are git dependencies with a `prepare: tsc` script, so
every install takes that path.

Following the error's own advice does not work: adding `allow-scripts[]` entries to
a project `.npmrc`, or passing `--ignore-scripts`, both fail identically — the flag
is injected by npm itself.

Install with the user config out of the way:

```bash
: > /tmp/empty-npmrc
npm install --userconfig=/tmp/empty-npmrc
```

Verified against three environments:

| npm | `~/.npmrc` has `allow-scripts[]` | result |
|---|---|---|
| 11.16.0 (this workstation) | yes | ❌ `EALLOWSCRIPTS` |
| 11.17.0 (same workstation, temp prefix) | yes | ❌ `EALLOWSCRIPTS` — **not a version fix** |
| 11.16.0 with `--userconfig=/tmp/empty-npmrc` | bypassed | ✅ 135 packages, ~3 min |
| 11.17.0 on fleet node `judah` | no | ✅ |

`--userconfig` also drops any private-registry auth and `strict-ssl` settings. This
repository needs neither: every dependency comes from the public npm registry or
from GitHub.

There is no `package-lock.json` in the tree, so `npm ci` is not available.

## 1. The reference implementation ✅

```bash
cd kotoba
npm install --userconfig=/tmp/empty-npmrc     # see step 0
npm test
npm run typecheck
```

```
 Test Files  1 passed (1)
      Tests  4 passed (4)
   Duration  787ms
```

`typecheck` (`tsc --noEmit`) exits 0 with no output.

`npm install` will warn that 8 packages have install scripts "not yet covered by
allowScripts" and skip them. **Let it.** Those are the `prepare: tsc` builds of the
transitive `@etzhayyim/*` packages. `kotoba/` imports `@etzhayyim/sdk` only as a
type, which vitest and `tsc` read from source, so nothing needs the built `dist/`.
Do not run `npm approve-scripts` to make the warning go away.

### The tests discriminate ✅

Four cases is not many, so check they fail when the code is wrong rather than
assuming it:

```bash
# widen the ISO-3166 alpha-2 check in src/types.ts to also accept 3 letters
perl -pi -e 's{/\^\[A-Z\]\{2\}\$/}{/^[A-Z]{2,3}\$/}' src/types.ts
npx vitest run          # Tests  1 failed | 3 passed (4)
git checkout src/types.ts
npx vitest run          # Tests  4 passed (4)
```

The mutation turns exactly one case red — `addEntry` must reject a 3-letter country
code — and reverting turns it green.

### What the four cases fix

| | invariant |
|---|---|
| list-update tracking | unknown `listSource` and negative `changeCount` are rejected; re-registering the same `updateId` returns `alreadyExists`, not a second record |
| entries | `country` is upper-cased on write and must be alpha-2; unknown `entityType` rejected; an entry naming a nonexistent `updateId` returns `listUpdateNotFound` rather than a dangling FK |
| listing | filters by source / type / country compose, and `q` searches aliases as well as `entityName` |
| coverage | rolls up counts by source and by type |

## 2. Build the appview ✅

> **Updated 2026-09-03 (svelte→cljs migration):** the SvelteKit app was removed.
> The UI is now shadow-cljs + reagent + kotoba-ui (murakumo-studio構成), built
> from the repository root:

```bash
npm install
node /path/to/root/scripts/resource-guard.mjs run build -- amu compile --target wasm32-browser app
```

```
[:app] Build completed. (95 files, 94 compiled, 0 warnings)
```

The build emits `web/dist/js/main.js` + `web/dist/vendor/kotoba-ui.css`, which
`wrangler.jsonc` serves as static assets (`assets.directory: ../../web/dist`).
`node_modules/` and `.shadow-cljs/` are not committed; do not commit them.

## 3. Do not deploy it yet ⚠

`wrangler.jsonc` claims two routes:

```
sn4c8t1x.etzhayyim.com/*
sanctions.etzhayyim.com/*
```

Both are **NXDOMAIN** (checked 2026-08-16 against `1.1.1.1`), as is
`mcp.etzhayyim.com`, which every XRPC call in the built worker forwards to. The
apex `etzhayyim.com` resolves, so this is not a resolver problem at your end.

```bash
for h in etzhayyim.com sanctions.etzhayyim.com sn4c8t1x.etzhayyim.com mcp.etzhayyim.com; do
  printf '%-26s %s\n' "$h" "$(dig +noall +comments "$h" @1.1.1.1 | grep -o 'status: [A-Z]*' | head -1)"
done
```

Deploying to a route whose hostname does not exist in the zone will not serve
traffic. Find out who owns the `etzhayyim.com` zone and what is meant to answer on
those names before running `wrangler deploy`.

## 4. What the deployed artifact actually contains ✅

> **Updated 2026-09-03 (svelte→cljs migration):** `wrangler.jsonc` now deploys
> `main: ./src/app.ts` (bundled by wrangler) with `web/dist` as static assets.
> `kotodama.jsonld`'s `component.path` and the deployed worker are the same
> program — the mismatch this section audited no longer exists. Kept as the
> audit record:

`kotodama.jsonld` names `src/app.ts` as `component.path`; `wrangler.jsonc` deploys
the SvelteKit build. They are different programs, so check which one you are about
to ship:

```bash
cd appview/etzhayyim-wasm-sanctions-sn4c8t1x/svelte
for s in screenEntity vertex_sanctions createKyselyDb kotodama-host-sdk mcp.etzhayyim.com; do
  printf '%-22s files=%s\n' "$s" \
    "$(grep -rl "$s" .svelte-kit/output .svelte-kit/cloudflare 2>/dev/null | wc -l | tr -d ' ')"
done
```

```
screenEntity           files=0
vertex_sanctions       files=0
createKyselyDb         files=0
kotodama-host-sdk      files=0
mcp.etzhayyim.com      files=1
```

Nothing from `app.ts` is in the artifact — `@etzhayyim/kotodama-host-sdk` is not
even a dependency of the svelte package. The single hit is the XRPC proxy route
from `svelte/src/routes/xrpc/[...path]/+server.ts`.

**Scope the grep to both directories.** `.svelte-kit/cloudflare/_worker.js` is a
4 KB shim that imports `../output/server/index.js`; grepping only `cloudflare/`
reports `xrpc files=0` and reads as "the proxy is not deployed", which is wrong.

### 4b. And what `src/app.ts` would do if it were the one deployed ✅

Section 4 establishes that nothing from `app.ts` reaches the artifact. Worth reading
anyway, because it is the file `kotodama.jsonld` names as `component.path` and the
one a reader opens to learn what screening means here. Its `screenEntity` handler:

```bash
grep -n 'screenEntity' -A 24 appview/etzhayyim-wasm-sanctions-sn4c8t1x/src/app.ts
```

Four things in it disagree with what is advertised, and each is checkable:

| | |
|---|---|
| the SQL | `upper(coalesce(subject_name,'')) like 'NAME%'` — a **prefix** match |
| the manifest | `kotodama.jsonld` advertises "entity matching, **fuzzy name resolution**", and its `convoSystemPrompt` tells the agent it "supports fuzzy name matching, alias resolution" |
| `score` | written as the constant **`0.85`** for every hit, so a threshold downstream cannot separate an exact hit from a one-character prefix |
| `matchType` | written as **`"contains"`**, which the SQL is not |
| `.limit(20)` | a query with more hits returns 20 and `matchCount: matches.length` reports 20 — **truncation with no signal** |
| the write | happens inside `if (matches.length > 0)`, so **a screen that finds nothing records nothing** |

The last one is the one to carry away. `AGENTS.md`'s governance section says
"screen-every-call writes OCEL audit event"; measured, the strings `ocel` and
`audit` appear **zero** times in `src/app.ts`, and the only write is the per-match
insert into `vertex_sanctions_match`. For a sanctions control the negative result is
the evidence you need — "we screened X and found nothing" is the record an auditor
asks for — and this implementation would keep no trace of it.

None of that is a reason to change the file today: §4 shows it is not deployed and
§5 shows nothing can screen anyway without list data. It is a reason not to read
`app.ts` as the specification of screening, and to treat the four rows above as
requirements for whatever eventually implements it.

## 5. ⚠ What you cannot do from this tree

Neither implementation can screen anything, because there is no list data and no
ingestion code:

```bash
git ls-files | grep -E '^data/|\.(csv|xml)$' | wc -l     # 0
```

The four ingestion URLs are in comments in `app.ts` and nothing reads them. Three
of the eight `listSource` values `types.ts` accepts — `UK-OFSI`, `AU-DFAT`,
`CA-OSFI` — have no URL recorded anywhere in the repository.

```bash
# the sources that are recorded, probed 2026-08-16
for u in \
  https://sanctionslistservice.ofac.treas.gov/api/PublicationPreview/exports/SDN.XML \
  https://scsanctions.un.org/resources/xml/en/consolidated.xml \
  https://www.mof.go.jp/policy/international_policy/gaitame_kawase/gaitame/economic_sanctions/list.html \
  https://webgate.ec.europa.eu/fsd/fsf/public/files/xmlFullSanctionsList_1_1/content ; do
  printf '%s  %s\n' "$(curl -sSL -o /dev/null -m 45 -w '%{http_code}' "$u")" "$u"
done
```

`200`, `200`, `200`, and `403` for the EU list, which needs a token.

Do not treat "the tests pass" as "screening works". The tests exercise a registry —
write a record, read it back, reject a malformed one. **No test in this repository
matches a name against a sanctions list**, and by the design stated in
`kotoba/src/index.ts` no test here ever should: screening is the regulated function
and is meant to live outside this package. `app.ts` disagrees and implements it
anyway; see [ADR-0001](adr/0001-what-this-repository-deploys.md).

## 6. Where to ask

Nothing in the tree records an owner. `NOTICE` points at `did:web:etzhayyim.com`,
`migration.edn` records the extraction from `etzhayyim/root@168497bd`, and the west
entry for this repository lives in `manifest/west.yml` of the `com-junkawasaki/root`
superproject. Start with whoever owns the `etzhayyim.com` zone — that unblocks
step 3, which blocks everything downstream of it.
