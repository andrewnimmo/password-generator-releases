/* Service worker (SPEC §11 web / M4): precache the whole application —
 * shell, code, styles, and every word list — so the page is fully usable
 * offline from the second visit. Cache-first serving; bump CACHE on any
 * deployed content change so old caches are swept on activate.
 *
 * The page makes no requests beyond its own origin's static files, and
 * neither does this worker. */

const CACHE = "pwgen-v4"; // v4: install icons for masked surfaces (2026-09-01)

const ASSETS = [
  ".",
  "index.html",
  "css/app.css",
  "js/main.js",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png",
  "icons/maskable-192.png",
  "icons/maskable-512.png",
  "wordlists/manifest.edn",
  "wordlists/COPYING-GPL-3.0.txt",
  // 8 locales x standard/invariant (Japanese pending; see BACKLOG)
  "wordlists/ca-standard.edn", "wordlists/ca-invariant.edn",
  "wordlists/de-standard.edn", "wordlists/de-invariant.edn",
  "wordlists/en-standard.edn", "wordlists/en-invariant.edn",
  "wordlists/es-standard.edn", "wordlists/es-invariant.edn",
  "wordlists/fr-standard.edn", "wordlists/fr-invariant.edn",
  "wordlists/it-standard.edn", "wordlists/it-invariant.edn",
  "wordlists/pt-standard.edn", "wordlists/pt-invariant.edn",
  "wordlists/zh-standard.edn", "wordlists/zh-invariant.edn",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(
      (cached) => cached || fetch(event.request)
    )
  );
});
