# Password Generator — Specification

**Status: DRAFT — awaiting ratification.** No code exists until this document is
approved. Once ratified, deviations require an explicit pause and a recorded
decision (see §16).

Version target: 2.0.0 (successor to the unreleased `passgen` 1.0 prototype,
now archived at `../passgen-legacy`). This is a ground-up rewrite; no legacy
code is carried forward. Legacy *data* (translations, theme colours) may be
imported selectively after review.

---

## 1. Purpose

A cross-platform generator of memorable, high-entropy, word-based passphrases
that are **safe to type on any keyboard** and that **comply with selectable
password policies** (Active Directory / Entra ID first among them, but not
privileged in the architecture).

Two applications share one headless core:

- **Desktop**: Clojure + cljfx (JavaFX), packaged natively for macOS, Windows, Linux.
- **Web**: ClojureScript + Reagent, installable as an offline PWA (this is also
  the mobile story — see §10).

## 2. Goals and non-goals

Goals:

1. Cryptographically secure generation (CSPRNG only; documented entropy math).
2. Keyboard-layout safety as a first-class, default-on constraint (§4).
3. Policy-as-data: multiple password specifications defined in EDN, validated
   by malli, user-extensible (§5).
4. One pure `.cljc` core with zero UI or platform dependencies; UI shells are thin (§6).
5. Reproducible, provenance-tracked word lists built by pipeline, never hand-edited (§7).
6. Clarity and usability in the UI, following csv-cleaver precedents (§11).
7. Verifiable quality: mutation-checked tests, property-based tests, locale
   robustness (tr_TR), vulnerability scanning (§13, §14).
8. The codebase doubles as a **learning example** — see the pedagogical
   mandate below.

**Pedagogical mandate (ratified 2026-08-31).** This application is a teaching
codebase as well as a tool. Consequences, enforced in review:

- Prefer the obvious implementation over the clever one. No "fancy hidden
  voodoo" — anything non-obvious (macros, reader conditionals beyond the
  routine, transducers where a `map` would do, protocol dispatch, unusual
  interop) must either be replaced with the plain version or carry a comment
  that *justifies* why the complexity is warranted and explains how it works.
- Namespaces open with a docstring stating their role in the architecture;
  public functions carry docstrings with argument/return descriptions.
- Comments in this project explain *concepts and rationale*, not just
  constraints: the entropy math, why rejection sampling exists, why the RNG
  is injected, what a reader conditional does the first time one appears in
  a namespace. Write for a reader learning Clojure/cljfx/cljs from this repo.
- Documentation (README, docs/) teaches the domain: what entropy means, why
  CSPRNGs matter, how the keyboard-invariance set is derived, how malli
  schemas drive both validation and generative tests.

Non-goals:

- Password *storage* or management. Nothing is ever persisted except UI preferences.
- Any network communication at runtime. No telemetry, no update phone-home
  (a manual-first update check in the csv-cleaver style may be added later as
  an explicit opt-in).
- React Native / native mobile apps (ruled out 2026-08-31; PWA instead).
- Browser extensions.

## 3. The generation model

Diceware-style: `N` words drawn **independently and uniformly, with
replacement** from a word list of size `K`, joined by a separator, with a
capitalisation rule and an optional digit block per the active password spec.

- Entropy is exactly `N × log2(K)` bits for the words, plus `log2(100) ≈ 6.64`
  bits for a two-digit block when present. Capitalisation and placement rules
  are deterministic and contribute 0 bits (never counted as entropy).
- *With* replacement (unlike the legacy code) because it is standard Diceware,
  the math is exact, and it removes the dictionary-exhaustion failure mode.
- All draws use rejection sampling to avoid modulo bias.

RNG: injected into the core as a function/protocol. Implementations:
`java.security.SecureRandom` (JVM), `crypto.getRandomValues` (browser).
`rand`, `rand-int`, `rand-nth`, `shuffle`, `Math.random` are **banned from the
entire codebase** and lint-enforced (§13).

### Name/username exclusion (AD rule, available to any spec)

Mirrors the actual AD check: the supplied display name is split on
`, . - _ # space tab`; tokens of **3+ characters** must not appear
case-insensitively in the password. Implementation: pre-filter the word list
(only against 3+ char tokens — the legacy bug of filtering on 1–2 character
tokens destroyed up to 60% of the dictionary), then post-validate the
assembled password and re-draw on the rare failure (attempt cap + error
surfaced to the UI, never a silent no-op).

## 4. Keyboard invariance (ratified 2026-08-31)

**Requirement**: generated passwords must be usable on any keyboard — only
characters that maintain their physical key position across layouts.

**Layout compatibility set**: US/UK QWERTY, German QWERTZ, French AZERTY, and
the Latin QWERTY variants (ES/IT/PT/Nordic/LatAm, which keep letter
positions). Turkish-Q's dotless-ı behaviour on the `i` key is documented as
out of scope. The set is data (`layouts.edn`) so it can be extended, and the
derivation of the invariant set from layout definitions is generated and
tested, not hand-asserted.

**Charset tiers**:

| Tier | Contents | Notes |
|---|---|---|
| `:invariant` | `e r t u i o p s d f g h j k l x c v b n` + uppercase + space | The 20 letters occupying identical keys in all covered layouts. No symbols survive any pairing. Default tier. |
| `:invariant-digits` | `:invariant` + `0-9` | Digits share physical keys everywhere but require Shift on AZERTY — documented caveat, shown in the UI. Used only where a spec's class rules demand a digit (e.g. AD's 3-of-4). |
| `:standard` | `a-z A-Z 0-9` + space | Typeable on any correctly-configured layout but **not** mismatch-safe. Explicit opt-out; UI flags it. |

**Separators** (ratified): space (default) or none (capitalised concatenation,
e.g. `TigerRocketPencil07`). The legacy symbol separators (`, . ! $ %`) all
move between layouts and are gone.

**Measured cost** (on legacy 7.8k lists): invariant filtering keeps ~2.0–3.1k
words per language ≈ 1.6–2.1 bits/word less; one extra word more than
recovers it. The pipeline builds invariant lists from larger corpora to
target 4096+ words (≥12 bits/word) where the source material allows.

## 5. Password specifications (malli + EDN) (ratified 2026-08-31)

Every policy is an EDN document validated against a malli schema. Specs ship
as resources; users can add their own from a file. The schema, the registry,
and validation live in the `.cljc` core, so desktop and web behave
identically and malli's humanised errors feed the UI directly.

Illustrative shape (the malli schema in `pwgen.specs` is normative):

```edn
{:id            :ad-entra
 :i18n-key      :spec/ad-entra           ; display name + description via i18n
 :charset-tier  :invariant-digits
 :words         {:min 3 :max 8 :default 4}
 :separator     {:allowed [:space :none] :default :space}
 :capitalization :first                  ; :first | :random | :all | :none
 :digits        {:count 2 :placement :suffix}
 :length        {:min 14}
 :exclude-name-tokens {:min-token-length 3}
 :entropy-floor-bits 50}
```

Built-in specs:

| Spec | Intent | Key rules |
|---|---|---|
| `:ad-entra` (default) | AD / Entra ID | ≥14 chars; upper+lower+digit (the only invariant-compatible 3-of-4); name-token exclusion; floor 50 bits |
| `:nist-passphrase` | NIST SP 800-63B style | Length-first (≥15), no composition rules, words + space; floor 60 bits |
| `:console-safe` | BIOS / KVM / recovery consoles | Strict `:invariant` tier — letters + case + space only; +1 default word; floor 55 bits |
| `:wifi` | WPA2/3 passphrase | 8–63 chars, words + digits; floor 60 bits |
| `:pin` | Numeric PIN | Digits only, configurable length 4–12; UI shows its (low) entropy honestly |

The UI shows computed entropy live; a result below the active spec's floor is
never returned silently — the generator raises the word count within the
spec's bounds, or refuses with a clear message.

Note the architectural point this settles: AD's class rules and strict
invariance are *irreconcilable in one policy* (no symbols exist in the
invariant set), which is exactly why policy is data, not code.

## 6. Architecture

```
src/pwgen/core.cljc        ; generation engine: pure fns, RNG + wordlist passed in
src/pwgen/rng.cljc         ; CSPRNG adapters (#?(:clj SecureRandom :cljs webcrypto))
src/pwgen/specs.cljc       ; malli schemas, built-in spec registry, validation
src/pwgen/entropy.cljc     ; entropy computation and floors
src/pwgen/names.cljc       ; sanitise, classify, AD token rules
src/pwgen/charset.cljc     ; tiers, invariant-set derivation from layouts.edn
src/pwgen/i18n.cljc        ; translation loading/lookup (Locale/ROOT discipline)
src/pwgen/desktop/*.clj    ; cljfx shell: app lifecycle, views, events, menus,
                           ;   prefs, clipboard, QR window
src/pwgen/web/*.cljs       ; Reagent PWA shell
cli: pwgen.cli (-main)     ; headless CLI over the core — proves UI-independence,
                           ;   used by VERIFICATION and scripting
```

Rules: nothing under `pwgen/*.cljc` may reference JavaFX, React, the DOM, or
any I/O; namespaces load without side effects (no top-level state, timers, or
resource reads — all wiring happens in `-main`/`init`). The namespace prefix
is `pwgen` (short, and unambiguous versus the legacy `password-gen`).

Identity: repo/app name **password-generator**; display name "Password
Generator"; macOS bundle id `dev.nimmo.password-generator`; jar
`password-generator.jar`; prefs node `password-generator`.

## 7. Word lists (ratified 2026-08-31)

Word lists are **build artifacts** produced by a bb pipeline (`bb wordlists`),
never hand-edited. The legacy manager GUI is deleted.

Pipeline stages: fetch pinned upstream sources → verify checksums → normalise
(NFD, strip diacritics, lowercase with explicit locale) → filter to charset
tier → dedup → minimum length 3 → emit
`resources/wordlists/<locale>-<tier>.edn` plus a manifest recording source
URL, revision, license, count, and bits/word. **All usable words are kept**
(amended 2026-08-31): bits/word is therefore fractional (log2 of the actual
count) — the entropy math in §3 is exact for any list size, and measurements
showed the previously ratified power-of-two truncation cost up to ~1
bit/word when a list landed just above a power of two (e.g. Catalan: 4096
kept of 8169 usable). Attribution
for CC-BY/CC-BY-SA sources is generated into `docs/WORDLISTS.md`. Per the
csv-cleaver lesson, every upstream pin is verified against the live source
before being committed.

**License separation rule**: each locale/tier stays in its own file with its
license recorded in the manifest; lists under different licenses are never
merged into one file. For GPLv3-licensed lists (ratified 2026-08-31: GPLv3
*data* is acceptable — as discrete data files read at arm's length it is an
aggregate under GPLv3 §5 and does not affect the project's code license),
the pipeline additionally: preserves upstream copyright/license notices in
the emitted file, ships the GPLv3 text alongside, records our modifications
(filtering, truncation) with dates in the manifest, and keeps the modified
list's source trivially available (the EDN file is its own source; repo +
pipeline provide the preferred form). Not legal advice; this is the
mainstream aggregation reading, and the CC-CEDICT build below remains the
fallback if compliance ever becomes contentious.

Sources (as researched 2026-08-31; the pipeline re-verifies):

| Locale | Source | License |
|---|---|---|
| en | EFF large wordlist | CC-BY 3.0 |
| fr | diceware-fr (C.-M. Duquesne) | CC-BY 3.0 |
| de | diceware-list (IDS Mannheim corpora) | verify at pin time |
| es, it | @jawlenskys lists (Tails/Tor) | CC-BY-SA 3.0 |
| ca | M. Hernandez list | CC-BY 4.0 |
| pt | @drebs pt-BR list | verify at pin time |
| ja | Romaji list (J. Greely) | verify at pin time |
| zh | cfbao pinyin list (GPLv3 accepted 2026-08-31 under the separation rule above); alternative: pipeline-built from CC-CEDICT (CC-BY-SA 4.0) | GPL v3 |

Entropy floor per list: a list that falls below 1024 words (10 bits/word)
after tier filtering is **not shipped for that tier**; the UI falls back to
the English list for generation with a visible note. This will likely apply
to ja/zh under `:invariant` (romaji/pinyin lean heavily on `a m w y z`) —
measured and reported by the pipeline, not guessed.

UI language and word-list language are **decoupled**: the word-list picker
defaults to the UI locale but is independently selectable.

## 8. Internationalisation

Nine UI locales carried over: en, es, zh, ja, fr, de, ca, it, pt. Legacy
translations are imported after review; the placeholder About content
("Internal Tooling", `dev@example.com`) is replaced with real metadata. All
strings — including the legacy hardcoded ones ("Active Directory / Entra
ID", fallbacks, "Space") — live in `i18n.edn`. System locale is read once at
startup (no polling — `Locale/getDefault` never changes mid-process) with a
manual override in the UI and a `--locale` CLI flag. All case operations use
explicit locale (`Locale/ROOT`) per the standing JVM-locale rule; the tr_TR
test suite enforces it.

## 9. Easter eggs (ratified 2026-08-31 — low priority, build-optional)

Mechanism (for when it is built — this is the **last** milestone):

- Triggers ship only as salted SHA-256 hashes; typed input is hashed and compared.
- Payloads (theme data only) ship AES-GCM-encrypted with a key derived
  (HKDF) from the trigger phrase — undecryptable until triggered. Date
  triggers get the same treatment with a documented caveat (dates are
  enumerable, so they are obscured, not secret).
- Plaintext `eggs.edn` lives only in the private repo; a bb step seals it.
- **Build option**: eggs are excluded from builds by default; included only
  when building with the eggs flag (e.g. `bb desktop --eggs` /
  `clojure -T:build uber :eggs true`). Release builds state which was used.
- Constitution: eggs are strictly cosmetic (themes/icons), never touch the
  generation path, and `docs/SECURITY.md` discloses that the sealed
  mechanism exists (mechanism public, content sealed) so audits find a
  documented feature, not a suspicious blob.

The legacy holiday themes/aliases are raw material for future egg content;
content decisions are Andrew's and deferred.

## 10. Mobile & nearby-device transfer (ratified 2026-08-31)

- **Mobile = the PWA**: web manifest + service worker, fully offline,
  installable on iOS/Android. No network calls of any kind.
- **Transfer = QR code**: desktop and web can show the current password as a
  QR on demand (never automatically), with an auto-hide timeout (default
  60 s) and an on-screen shoulder-surfing caution. Air-gapped by design —
  nothing transits a network. Desktop: ZXing (JVM); web: a small audited
  npm/cljs QR encoder (offline, no CDN). The PWA additionally offers the Web
  Share API (native share sheet → AirDrop/Quick Share) where available.
- Explicitly rejected: React Native (never ran in legacy, heavy churn),
  desktop AirDrop (no public API), Web Bluetooth (no iOS support), LAN/PAKE
  transfer (unjustified attack surface for now).

## 11. Desktop UI/UX (revised 2026-08-31 to the csv-cleaver patterns, by ruling)

Clarity and usability first; csv-cleaver is the binding precedent for
window behaviour, dialogs, menus, persistence, appearance and updates.

- **Lifecycle (fixes the legacy quit bug)**: implicit exit re-enabled after
  cljfx init; `:on-close-request` wired; window close, menu Quit, and ⌘Q all
  perform the same clean shutdown. Session (settings + window geometry) is
  saved at quit AND from a JVM shutdown hook, because macOS's Glass-built
  Quit bypasses JavaFX close handlers.
- **Dialogs are overlays, not windows**: About and Help render as a dimmed
  backdrop + centred card over the main window. About hosts the options
  that affect that window — **language**, **appearance**, clipboard
  auto-clear, and the update check — precisely because it sits on what they
  change. Quit is deliberately NOT in About.
- **Menus, minimal by reasoning**: menus exist so Quit is findable. On
  macOS the native application menu already carries Quit, so there is no
  File menu there, and About is installed INTO that native menu via the
  Objective-C runtime (JNA — csv-cleaver's bridge, ported). Windows/Linux:
  File(Quit ⌘Q) and Help(Help, About). Generate needs no menu or chord: it
  is the window's default button, pinned in the footer.
- **Quick-route buttons**: round `?` and `i` buttons top-right open Help
  and About for users who never open menus.
- **Language ↔ word list**: choosing the app language (in About) also
  selects the matching word list; the main-window picker may then diverge.
  A matching pair is saved as "follows the language"; only a genuine
  divergence is pinned across sessions.
- **Main window**: spec picker with description; word count — **counts
  that cannot meet the entropy floor are greyed out and unselectable**
  (ruled 2026-08-31: prevention over warning; when name filtering shrinks
  the list, the selection climbs visibly to the smallest valid count, and
  the engine's raise-or-refuse net therefore never fires from the UI);
  separator as segmented pills; word-list picker; name/username field
  (optional, never silently pre-filled — one-click system-username
  button); live entropy meter with the floor; the **generated password in
  a tinted card** — large monospace, centred, Copy directly beside it, its
  entropy underneath; nothing shown before the first generate.
- Errors surface as inline callouts — no silent failures.
- **Appearance**: AtlantaFX (PrimerLight/PrimerDark) with a
  System/Light/Dark choice in About; System follows the OS live. All
  styling via stylesheet tokens, no inline styles.
- **Updates (csv-cleaver mechanism)**: manual-first check against the
  GitHub releases endpoint derived from branding.edn's :homepage; an
  opt-in startup check whose only visible outcome is a quiet footer link;
  `--no-update-check` removes the feature for the run entirely. Nothing
  downloads; failures collapse to a quiet "could not check".
- **Persistence**: an EDN settings file at the platform's own location
  (`~/Library/Application Support/Password Generator/`, `%APPDATA%`, XDG),
  whitelist-filtered and failure-quiet. Remembered: language, diverged
  word list, spec + knobs, theme, auto-clear, update opt-in, window
  geometry. Never anything sensitive.
- **Identity**: resources/branding.edn (name, version, copyright, contact,
  homepage) feeds the window title, About, the update endpoint and the
  packaging — one file, no drift.
- Web UI mirrors the structure (overlay About/Help, same controls,
  responsive) within what a browser allows.

## 12. Build & release

- **tools.build** (ratified) for all JVM builds — uberjar via
  `clojure -T:build uber`; bb tasks orchestrate but never bypass it.
- bb tasks: `test`, `test-tr` (tr_TR JVM), `test-cljs`, `lint`, `sec`
  (clj-watson + npm audit), `wordlists`, `docs-check` (render verification),
  `uber`, `desktop` (jpackage for host OS), `web` (shadow-cljs release),
  `verify` (the full local gate), `ci` (what CI will run).
- Dependencies: Clojure 1.12.x, cljfx (current), **JavaFX pinned explicitly
  to a current LTS with only `javafx-controls`/`javafx-graphics`/`javafx-base`**
  (the legacy build shipped WebKit/media for nothing — 123 MB dmg),
  shadow-cljs, Reagent, malli, ZXing. All pins verified against live
  sources; scanned (§14).
- **Releases**: macOS built locally — arm64 native plus Intel via the
  Rosetta/x64-JDK technique proven on csv-cleaver; Windows/Linux on GitHub
  runners **after** the repo goes private-remote and the standing
  runner-target confirmation happens. No workflow files exist until that
  ruling. Tag pushes are Andrew-only (csv-cleaver precedent).

## 13. Testing & verification

Standing rules apply in full: every test mutation-checked (a test must fail
when its subject is broken); no blind or self-serving assertions; claims in
reviews/PRs tagged OBSERVED/TESTED/DERIVED with evidence
(`docs/VERIFICATION.md` discipline).

- Unit + **property-based tests** (test.check, driven by the malli schemas):
  every generated password validates against its spec; charset-tier
  compliance (every char in the tier set — this test alone would have caught
  the legacy symbol suffixes); entropy accounting matches the closed-form
  math; name-exclusion holds for generated adversarial names; rejection
  sampling uniformity (χ² smoke test).
- **Invariance tests**: the invariant set is re-derived from `layouts.edn`
  and asserted equal to the documented 20 letters; adding a layout breaks
  the build until the tier tables are regenerated.
- **tr_TR suite**: full JVM test run under Turkish locale in CI and `bb verify`.
- **cljs**: same core tests compiled via shadow-cljs `:node-test` (no
  browser/karma dependency); web-crypto RNG adapter tested under Node.
- **Lint**: clj-kondo with custom hooks banning `rand*`/`shuffle`/`Math.random`
  and locale-sensitive case calls outside `pwgen.i18n`/`pwgen.charset`.
- Desktop shells stay thin; their pure logic lives in cljc and is tested on
  both platforms. Manual UI checks are tracked as a GitHub issue checklist
  once the repo is on GitHub (standing human-checklist rule).

## 14. Security

- Threat model in `docs/SECURITY.md`: offline guessing (CSPRNG + floors),
  shoulder surfing (QR on-demand + timeout), clipboard scraping (auto-clear;
  documented residual risk), supply chain (pinned deps + scanning), plus the
  JVM-string-immortality caveat documented honestly.
- Scanning (mandatory, standing rule): clj-watson (JVM deps) + npm audit
  (web deps) locally before every PR via `bb sec`, and nightly in CI once CI
  exists; results recorded in the ledger.
- No runtime network access; the web build is CSP-compatible with no
  external resources.
- Egg mechanism disclosed (§9). Generated passwords are never logged,
  persisted, or transmitted.

## 15. Documentation

`README.md` (user-facing: what/why/install/use, keyboard-safety explanation,
screenshots), `SPEC.md` (this), `BACKLOG.md`, `docs/SECURITY.md`,
`docs/WORDLISTS.md` (generated provenance/attribution), `docs/BUILD.md`,
`docs/VERIFICATION.md`, `CHANGELOG.md`. All markdown passes `bb docs-check`
(orphan-row/cell lint + GitHub render verification, ported from the standing
docs tooling).

**Project license: EPL-2.0** (ratified 2026-08-31; version rationale: the
current 2017 revision of the EPL — clearer patent terms, no choice-of-law
clause — used across the modern Clojure ecosystem, e.g. malli; Clojure core
being EPL-1.0 imposes nothing on application code). No Secondary-License
(GPL-compat) designation is made. Word-list data licenses (CC-BY, CC-BY-SA,
GPLv3) travel with their files per §7's separation rule and do not affect
the code license.

## 16. Milestones & governance

M1 core engine + specs + RNG + entropy + CLI + full test suite ·
M2 word-list pipeline (en first, then de/fr/es/it/ca/pt; ja/zh via CC-CEDICT
and romaji sources) · M3 desktop app · M4 web PWA · M5 QR transfer ·
M6 packaging/release lane (macOS local; CI after runner ruling) ·
M7 eggs (build-optional, off by default).

Decision log so far — 2026-08-31: review model Fable 5 in-session; full
rewrite in fresh repo (legacy → `passgen-legacy`); tools.build mandatory;
invariant tier default with `:invariant-digits` only where class rules
demand, AZERTY caveat documented; separators space|none, space default;
malli+EDN multi-spec; word lists by pipeline, zh from CC-CEDICT; manager GUI
deleted in favour of `bb wordlists`; eggs cosmetic-only,
mechanism-disclosed, build-flag excluded by default, low priority; mobile =
PWA + QR, RN dropped. Later same day: pedagogical mandate (§2); project
license EPL-2.0; GPLv3 word-list data accepted under the §7 separation and
compliance rules (zh may use the cfbao pinyin list; CC-CEDICT build is the
fallback); clipboard auto-clear defaults ON; versioning starts at 2.0.0 on
first release. Amendment 2026-08-31 (post-M2 measurement): §7 truncation
rule replaced — keep ALL usable words with fractional bits/word instead of
truncating to a power of two (Andrew's ruling on the flagged cliff cost).
Amendment 2026-08-31 (post-M3 visual QA, Andrew's ruling): §11 revised to
the csv-cleaver patterns — About/Help as in-window overlays with About
hosting language/appearance/clipboard/update options, ?/i quick buttons,
minimal platform-aware menus with native macOS About (JNA), language
selecting the matching word list by default, EDN settings file in the
platform config dir replacing java.util.prefs, AtlantaFX theming with
System/Light/Dark, the csv-cleaver update mechanism, and the generated
password presented as a card with adjacent Copy.

Open items requiring a ruling before the relevant milestone: **CI runner
targets** (standing rule — before any workflow file, blocks M6 only).
Nothing blocks M1.
