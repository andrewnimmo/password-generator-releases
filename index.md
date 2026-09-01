---
title: Password Generator
---

# Password Generator

A keyboard-safe passphrase generator: memorable, high-entropy word-based
passwords built only from characters that keep their physical key position
across QWERTY, QWERTZ and AZERTY layouts — so they type correctly even on a
console set to the wrong layout — and that comply with selectable password
policies (Active Directory / Entra ID first among them).

## Use it

- **Web app** — [open it here](app/). It works offline once installed:
  on a phone, add it to your home screen; on desktop, use the browser's
  *Install* option. Nothing is stored or sent anywhere.
- **Desktop app** — download the latest installer from
  [Releases](https://github.com/andrewnimmo/password-generator-releases/releases/latest)
  (macOS now; Linux to follow). The desktop app checks this page for new
  releases only when you ask it to.

## Documentation

- [Specification](docs/SPEC) — what the application guarantees and why,
  including the keyboard-invariance analysis and the password
  specifications.
- [Word lists](docs/WORDLISTS) — provenance, licences and attribution for
  every embedded word list.
- [Verification ledger](docs/VERIFICATION) — the evidence behind every
  claim of correctness.
- [Changelog](CHANGELOG) · [Third-party components](THIRD-PARTY) ·
  [Licence](LICENSE) (Eclipse Public License 2.0)

The source is developed in a private repository and published here as
releases and documentation; contact
[contact+password.generator@nimmo.dev](mailto:contact+password.generator@nimmo.dev).
