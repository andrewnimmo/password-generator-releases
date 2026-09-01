# Verification ledger

Claims about this codebase carry evidence. Tags: OBSERVED (read from
source/registry), TESTED (executed, output recorded), DERIVED (reasoned
from verified facts). Newest entries first within each milestone.

## M6 local lane — macOS packaging (2026-09-01)

- Ported from csv-cleaver's build-mac.sh at 71f24fa, lessons intact
  (OBSERVED): full jlink module list (their jdk.localedata incident), the
  app-image start check that runs BEFORE a DMG exists, the bash-3.2 empty
  array form, --license-file on the dmg step only, entitlements with
  per-entry justifications (JNA's disable-library-validation applies
  identically here).
- Adaptations (OBSERVED in diff): desktop uberjar built from the :desktop
  alias basis with ONLY the new thin launcher AOT'd (pwgen.desktop.main;
  compiling app.clj would boot JavaFX in the build JVM); --app-version
  uses the numeric prefix (jpackage/macOS rejects -SNAPSHOT);
  WORDLISTS.md staged into the bundle alongside LICENSE/NOTICE/
  THIRD-PARTY.md, since GPL-3.0 word-list data ships inside the jar.
- TESTED (first run, 2026-09-01): jdk.localedata confirmed in the bundled
  runtime; the packaged binary answered `--version` with
  "Password Generator 2.0.0-SNAPSHOT (f12c46e)" (the new build-info
  stamp); a full GUI --smoke of the packaged .app exited 0 on the bundled
  runtime; dist/"Password Generator-2.0.0.dmg" produced, 62 MB (legacy
  prototype: 123 MB). Unsigned — signing arms via MACOS_SIGNING_IDENTITY.
- NVD lane (TESTED, 2026-09-01): .nvd-api-key (gitignored, verified
  untracked) feeds `bb sec-nvd`; the first dependency-check scan —
  including the CISA Known Exploited Vulnerabilities analyzer — completed
  clean: 12 dependencies scanned, 0 vulnerable. Both scanning lanes
  (github-advisory and NVD) now agree.
- PENDING-USER: Andrew mounts the DMG and runs the installed app.

## M5 — QR transfer (2026-08-31)

- Round trip proven on both stacks (TESTED): the JVM suite decodes
  ZXing-encoded matrices with ZXing's reader for every password shape
  (spaced, concatenated, PIN); in the live browser, Chromium's
  BarcodeDetector decoded the rendered overlay image back to the exact
  generated password ("Process undrilled encounter delighted99",
  matches: true). Quiet-zone margin asserted.
- Overlay lifecycle tested in both shells' handlers: explicit open with
  [:make-qr]+[:schedule-qr-hide], expiry closes and clears the rendered
  code, late expiry after manual close is a no-op, no password → no
  overlay. Web share effect carries the password only when one exists.
- BUILD DEFECT found by this verification (TESTED, fixed): shadow-cljs
  caches by source content, so the inline-edn macro's resource reads were
  invisible to invalidation — the release bundle shipped a stale i18n.edn
  (QR strings rendered as raw keyword names). Fixed by reading through
  shadow.resource/slurp-resource during cljs compilation, which registers
  the file as a build dependency; verified by rebuild (10 files
  recompiled, strings present, overlay correct on screen). An mtime-touch
  workaround was tried first and proven useless (0 recompiled) — shadow
  hashes content, not timestamps.
- Desktop QR is code-identical in lifecycle and ZXing-tested; its visual
  pass rides on Andrew's next `bb app` QA (PENDING-USER).

## M4 — web PWA (2026-08-31)

### Verified live in the browser pane (TESTED, dev + release builds)

- Full flow driven in a real Chromium tab: generation ("Vest unfitted
  slighted chess02", 51.8 bits shown), name filtering, separator pills,
  trimmed word-count picker (3 absent on AD/English — same rule as
  desktop), About overlay (dictionary entry, EPL licence line, Barcelona
  attribution, icon), language→wordlist coupling (Deutsch UI produced
  "Tritt skepsis derb ried33" from the German list), dark theme, PIN mode
  ("≈ 19,9 Bit Entropie" in German), persistence round-trip via browser
  storage with the same explicit-choice/divergence rules, mobile viewport
  (375px) layout, and service-worker registration. Screenshots captured
  for light, dark, About, and mobile.
- Network audit: every request same-origin (app shell, css, js, wordlists,
  icons) — zero external requests (SPEC §14).
- Both test lanes green after the pwgen.ui extraction: 66 tests / 1147
  assertions JVM + tr_TR; 36 / 693 Node. Lint 0/0 (clj-kondo's non-zero
  exit on warnings correctly failed `bb verify` until an unused require
  was removed — the gate works).

### Bugs found by this verification (TESTED, fixed)

- Reagent schedules re-renders on requestAnimationFrame, which browsers
  suspend in hidden tabs — async updates (list loading) froze the UI in
  the hidden preview pane while the state atom was provably correct.
  Fixed with reagent.core/flush after every dispatch (synchronous render;
  the tree is small). Also means a backgrounded tab finishes loading
  instead of showing "Loading…" until focused.
- Dev-loop trap, twice: the service worker serves cache-first, so
  rebuilds were invisible until the SW and caches were cleared. Deploy
  guidance encoded in sw.js: bump the CACHE version on any content
  change (automation queued for the M6 packaging lane).

## M3 visual QA round 2 (2026-08-31)

- Andrew's QA: German interface at startup (root causes: an earlier
  --locale de smoke run SAVED the session into the real settings file, and
  language was persisted unconditionally); the password nudged vertically
  on Copy (the .copied border resized the button).
- Fixes (TESTED): language persists only after an explicit About choice
  (:locale-chosen? — CLI overrides and system detection never persist;
  4-case test); --smoke runs are transient (verified: smoke exits 0 and no
  settings file exists afterwards); Copy feedback is colour-only with the
  confirmation moved to the card's meta line (size-invariant button —
  constant text, no border).
- The polluted settings file was deleted. Process lesson recorded: any
  verification run of an app that persists state must be transient by
  construction, not by luck.
- 65 tests / 1038 assertions green; lint 0/0. PENDING-USER: re-QA.

## M3 revision — csv-cleaver patterns (2026-08-31)

### Reference study (OBSERVED)

- All patterns ported from the local csv-cleaver checkout at 71f24fa:
  overlay dialogs, ?/i header buttons, platform-aware minimal menus, the
  JNA native-About bridge (macos.clj, including its SIGABRT precondition
  discipline), EDN settings file + shutdown-hook session save + window
  geometry sanity checks, AtlantaFX theming with the radio-pill capture
  filter, and the GitHub releases update check with injectable fetch.
- Dependency pins taken from csv-cleaver's working deps.edn on this
  machine: atlantafx-base 2.1.0, jna 5.17.0; jsonista 1.0.1 verified
  against Clojars.

### Verification (TESTED, 2026-08-31)

- 64 tests / 1027 assertions green (JVM + tr_TR), lint 0/0. New offline
  suites: updates (endpoint derivation, version comparison incl. the
  2.1-vs-2.1.0 tie, injected-fetch statuses), settings (temp-file round
  trip, merge, nil-removal, corrupt-file quietness, platform paths), and
  handle-based logic tests (language→wordlist coupling with effects,
  quiet-vs-manual update contract, quit paths, settings sanitisation).
- Mutation check: quiet-update contract broken in logic → test failed (1
  failure), reverted green.
- Smoke launches exit 0 (~7 s): default, and --locale de. The settings
  file was verified written by the shutdown path with correct geometry.
- LIVE BUG found by the de-locale smoke: an en/en session saved
  wordlist-locale :en, which then pinned the English list under a
  --locale de launch as if the user had diverged. Fixed: a matching pair
  is saved as "follows the language" (nil); only genuine divergence pins.
  Regression-tested.
- PENDING-USER: Andrew's visual QA of the revised UI (`bb app`).

## M3 — desktop app (2026-08-31)

### Environment and pins (TESTED/OBSERVED 2026-08-31)

- Java: Temurin JDK 25.0.4 LTS (arm64) — `java -version`.
- cljfx 1.10.361 (Clojars latest release) with its bundled JavaFX 22-ea
  excluded; JavaFX pinned to 26.0.2 (latest GA per Maven metadata),
  resolving to controls/graphics/base + mac-aarch64 classifiers ONLY —
  verified with `clojure -A:desktop -Stree` (no media/web/fxml/swing).

### Test suite (TESTED, 2026-08-31)

- JVM: 52 tests / 831 assertions, 0 failures; identical under tr_TR.
- Node (cljs): 36 tests / 693 assertions — includes the i18n completeness
  suite, so translation integrity is proven on both platforms.
- Lint (src, test, dev): 0/0. docs-check: clean.
- New suites: i18n (every locale carries exactly the :en key set, no blank
  strings, fallback chain), lists loader (all 16 shipped lists load, meta
  count = vector count, ja falls back to en flagged), desktop logic
  (preview matches generation math incl. auto-raise and live name
  filtering; transitions clear stale output; error→message mapping is
  total over the engine's error vocabulary).

### Mutation check (TESTED, 2026-08-31)

- Removed `:menu/quit` from the German translations → i18n completeness
  test failed (1 failure) naming the missing key; restored, suite green.
  (Restore note: the first restore attempt used `git checkout` on a file
  not yet committed — the mutation survived into one verify run before
  being caught and re-fixed. Recorded as a process lesson: mutate only
  committed files, or restore by edit.)

### Smoke launch (TESTED, 2026-08-31)

- `clojure -M:desktop --smoke`: app started, rendered, and quit cleanly
  after 3 s — exit 0, total 7.6 s, no lingering JVM (the legacy quit bug's
  regression check). CVDisplayLink -6661 stderr lines are known benign
  macOS/JavaFX display-sync noise.
- Visual/interaction QA (menus on a real menu bar, dark-mode switch,
  clipboard auto-clear timing, all 9 locales rendered) is PENDING-USER —
  Andrew's manual pass via `bb app`; the SPEC §13 manual checklist becomes
  a GitHub issue when the repo goes remote.

## M2 — word-list pipeline (2026-08-31)

### Sources and licenses (OBSERVED, fetched live 2026-08-31)

- All eight upstream files fetched and sha256-pinned in
  `resources/wordlist-sources.edn`; the pipeline refuses on mismatch.
- Per-list licenses read from the ulif/diceware COPYRIGHT file
  (machine-readable Debian format) at pinned commit 43e90da: de CC-BY-3.0
  (Fouquet), fr CC0-1.0 (Tango/Tails/Tor), pt-br CC-BY-3.0 (drebs),
  ca/es/it CC-BY-4.0 (victordargallo). en from eff.org directly
  (CC-BY-3.0, EFF/Bonneau). zh GPL-3.0 from the cfbao/chinese-diceware
  LICENSE at pinned commit 5a37230 — full GPL text shipped alongside the
  data (`resources/wordlists/COPYING-GPL-3.0.txt`) per SPEC §7.
- Japanese (romaji): source/license verification still outstanding (PENDING).

### Pipeline verification (TESTED, 2026-08-31)

- 16 lists generated (8 locales × standard/invariant); all meet the SPEC §7
  1024-word floor — smallest are es/pt/zh invariant at exactly 1024
  (10 bits/word); largest de/es/it standard at 8192 (13 bits/word).
- `clojure -M:wordlists --check`: committed lists reproduce byte-for-byte
  (modulo :generated date) from the pinned sources.
- Invariant-tier output cross-checked word-by-word against
  `pwgen.charset/conforms?` — the application's own enforcement — inside
  the pipeline itself.
- 6 unit tests / 26 assertions over the pure pipeline steps; mutation
  check: an off-by-one planted in pow2-floor produced 3 failures, reverted
  to green.
- CLI smoke on real lists: console-safe from en-invariant produced
  "Dress kerosene speed bulldog hunting" (55.0 bits); ad-entra from
  es-invariant with name "Ana E Silva" filtered correctly and auto-raised
  to 5 words (56.6 bits).

### Observations for the decision log (DERIVED from TESTED stats)

- Power-of-two truncation (SPEC §7 as first ratified) had a measurable
  cost when a list landed just above a power of two: ca-standard kept 4096
  of 8169 usable words (−0.996 bits/word), en-standard 4096 of 7772
  (−0.92), es-invariant 1024 of 1972 (−0.94). RESOLVED 2026-08-31: Andrew
  amended §7 to keep all usable words; lists regenerated (invariant tiers
  now 1832–3213 words, standard 7772–8192), `--check` reproducibility
  re-verified (TESTED).
- The upstream es/ca lists contain some proper nouns (e.g. "aaron",
  "leigh") — an upstream editorial choice, recorded here for transparency.

## M1 — core engine (2026-08-31)

### Dependency pins (OBSERVED, live registries queried before pinning)

| Dependency | Version | Verified against |
|---|---|---|
| org.clojure/clojure | 1.12.5 | repo1.maven.org maven-metadata (1.12 line) |
| metosin/malli | 0.20.1 | clojars API |
| org.clojure/test.check | 1.1.3 | repo1.maven.org maven-metadata |
| org.clojure/tools.cli | 1.4.256 | repo1.maven.org maven-metadata |
| io.github.clojure/tools.build | 0.10.14 | repo1.maven.org maven-metadata |
| clj-kondo/clj-kondo | 2026.08.04 | clojars API |
| io.github.clj-holmes/clj-watson | v6.1.0 (sha be98e4db7) | GitHub releases API |
| thheller/shadow-cljs | 3.5.0 | clojars API |

Note: `org.clojure/tools.build` on Maven Central is a stale 0.9.x line; the
maintained coordinate is `io.github.clojure/tools.build` (OBSERVED — both
metadata files fetched).

### Test suite (TESTED, 2026-08-31)

- JVM: `clojure -M:test` — 32 tests, 166 assertions, 0 failures.
- JVM under tr_TR: `clojure -M:test:tr` — same result (locale discipline
  holds under the adversarial locale).
- ClojureScript on Node 26 (`npx shadow-cljs compile test && node
  target/cljs-test/node-tests.js`) — 32 tests, 166 assertions, 0 failures:
  the identical .cljc test files pass on both platforms, compile warnings 0.
- Property tests: 3 defspecs × 50 trials (charset/floor/length invariants,
  name-token exclusion, per-seed determinism) — all pass on both platforms.
- Lint: `clojure -M:lint --lint src test` — 0 errors, 0 warnings.
- Vulnerability scan: `clj-watson scan -p deps.edn -t github-advisory` —
  12 dependencies scanned, 0 vulnerable (TESTED 2026-08-31).

### Mutation checks (TESTED, 2026-08-31)

Each subject was deliberately broken, its test observed failing, and the
mutation reverted (final suite re-run green):

| Mutation | Expected detector | Result |
|---|---|---|
| layouts.edn: AZERTY home row `q`→`a` (making `a` falsely invariant) | pwgen.charset-test | FAILED as required (3 failures) |
| names/remove-token-words: legacy both-directions containment reinstated | word-filtering-direction regression test | FAILED as required (1 failure) |
| i18n/lower-case: Locale/ROOT removed (default-locale toLowerCase) | locale-independence test under `-M:test:tr` | FAILED as required (3 failures) |
| scratch file calling rand-int and clojure.string/lower-case | clj-kondo discouraged-var bans | ERRORED as required (2 errors, correct messages) |

### Live bug found by our own gates (TESTED, 2026-08-31)

The CLI's first smoke run printed `bits: 54,6` — clojure.core/format's `%f`
obeys the JVM default locale (this development machine formats decimals
with commas). Fixed with `pwgen.i18n/format-root` (Locale/ROOT), a
clj-kondo ban on bare `format`, and a regression test asserting
`(format-root "%.1f" 54.6)` = `"54.6"`. This is the third project where
default-locale formatting has surfaced; the ban is now mechanical.

### CLI and build (TESTED, 2026-08-31)

- All CLI paths exercised against a 4096-word synthetic list: default
  ad-entra (4 words + 2-digit suffix, 54.6 bits), name exclusion with
  `:none` separator, console-safe ×3, PIN length 8, `--list-specs`, and
  the missing-wordlist error path (exit 1).
- `clojure -T:build uber` produced
  `target/password-generator-2.0.0-SNAPSHOT.jar`; running it standalone
  generated a nist-passphrase result and correctly RAISED the word count
  from the requested 4 to 5 to meet the 60-bit floor, reporting so.

### Derived facts awaiting external verification

- The invariant-letter analysis (SPEC §4) is derived from layout data
  transcribed from standard QWERTY/QWERTZ/AZERTY references (DERIVED);
  cross-checking against authoritative layout specifications is queued for
  the M2 documentation pass.
