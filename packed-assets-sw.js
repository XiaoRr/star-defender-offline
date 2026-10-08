// Only packed immutable game resources; entry scripts and saves are untouched.
const RESOURCE_CACHE = "star-defender-combat-files-v1";
self.addEventListener("install", event => event.waitUntil(self.skipWaiting()));
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  const base = new URL(self.registration.scope);
  if (event.request.method !== "GET" || url.origin !== base.origin || !url.pathname.startsWith(base.pathname + "assets/")) return;
  // Main-bundle scripts must always follow their own content version.
  if (!/\/assets\/(resources|internal)\/(import|native)\//.test(url.pathname)) return;
  url.search = "";
  event.respondWith(caches.open(RESOURCE_CACHE).then(async cache => (await cache.match(url.href)) || fetch(event.request)));
});
