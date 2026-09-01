# Third-party components

Password Generator is distributed under the Eclipse Public License 2.0 (see
`LICENSE`). It depends on, and its installers redistribute, the components
below.

## Bundled in the installers

The `.dmg` (and, later, the Windows and Linux installers) contains a Java
runtime produced by `jpackage`. That runtime is **not** covered by this
project's EPL-2.0 licence.

| Component | Licence | Source |
|---|---|---|
| OpenJDK 25 (Eclipse Temurin) | GPL-2.0 with Classpath Exception | https://github.com/adoptium/temurin-build |
| OpenJFX 26 | GPL-2.0 with Classpath Exception | https://github.com/openjdk/jfx |

The Classpath Exception is what makes this combination lawful: it grants
permission to link independent modules against these components and to
distribute the result under terms of your choosing, without the resulting
work becoming subject to the GPL. The components themselves stay under
GPL-2.0+CE, and the links above satisfy the corresponding
source-availability requirement.

## Application dependencies (desktop)

| Component | Licence |
|---|---|
| org.clojure/clojure | Eclipse Public License 1.0 |
| org.clojure/tools.cli | Eclipse Public License 1.0 |
| metosin/malli | Eclipse Public License 2.0 |
| cljfx/cljfx | MIT |
| io.github.mkpaz/atlantafx-base | MIT |
| org.openjfx/javafx-{base,graphics,controls} | GPL-2.0 with Classpath Exception |
| net.java.dev.jna/jna | Apache-2.0 OR LGPL-2.1 (dual; used under Apache-2.0) |
| metosin/jsonista (and Jackson) | Apache-2.0 |
| com.google.zxing/core | Apache-2.0 |

## Word lists

The application embeds word lists that are data, not code, each under its
own licence — CC0-1.0 (French), CC-BY-3.0 (English/EFF, German, Brazilian
Portuguese), CC-BY-4.0 (Catalan, Spanish, Italian), and GPL-3.0 (the
Chinese pinyin list, whose full licence text ships inside the application
as `wordlists/COPYING-GPL-3.0.txt`). Full provenance, checksums and
attribution are in `WORDLISTS.md`, installed alongside the application.

## Web application

The browser build additionally uses reagent (MIT), React (MIT) and
qrcode-generator (MIT). It bundles no Java runtime.

## Build and test only

Not redistributed; used during development.

| Component | Licence |
|---|---|
| io.github.clojure/tools.build | Eclipse Public License 1.0 |
| io.github.cognitect-labs/test-runner | Eclipse Public License 1.0 |
| org.clojure/test.check | Eclipse Public License 1.0 |
| com.google.zxing/javase (round-trip tests) | Apache-2.0 |
| clj-kondo/clj-kondo | Eclipse Public License 1.0 |
| io.github.clj-holmes/clj-watson | MIT |
| thheller/shadow-cljs | Eclipse Public License 1.0 |
