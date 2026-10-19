/* The Patio: the service worker. It exists so a phone can put the site on its home screen, and so a page that cannot load says so
   plainly. It keeps NO page, NO menu, NO price and NO photo: every page and every file (menu.js, config.js, the photos) is the network,
   every time, so a changed price, a dish taken off or the delivery switch shows at once and a stale menu is never served. The only
   thing kept is the one offline page and the icon. */
const CACHE = "patio-shell-v1";
/* relative to where the worker lives, so the site works at a domain's root and under a repository's own address alike */
const BASE = new URL("./", self.location.href);
const OFFLINE = new URL("offline.html", BASE).pathname;
const SHELL = [OFFLINE, new URL("images/icon-192.png", BASE).pathname];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(SHELL.map((u) => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === "navigate") {                       /* a page: always the network; with no signal, the offline page */
    e.respondWith(fetch(req).catch(() => caches.match(OFFLINE)));
    return;
  }
  if (!SHELL.includes(url.pathname)) return;           /* everything else (menu, config, photos) goes straight to the network */
  e.respondWith(fetch(req).catch(() => caches.match(url.pathname)));
});
