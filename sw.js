/* My Bible — service worker
   Goal: the installed app always shows the latest version, and still works
   fully offline.

   - App pages (navigations) are fetched from the network FIRST, so an updated
     HTML file appears the very next time the app is opened. If the phone is
     offline, the last saved copy is used instead.
   - A new service worker activates immediately (skipWaiting + clients.claim),
     and the page reloads itself once the new worker takes over.
   - Bump VERSION whenever you upload a new build to force a clean cache. */
const VERSION = 'v4';
const CACHE = 'my-bible-' + VERSION;
const ASSETS = ['./', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.all(ASSETS.map((u) => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* The page asks us to take over at once when a new version is found. */
self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // App pages: network first so updates show immediately; cached copy offline.
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then((r) => {
          if (r && r.ok) { const cl = r.clone(); caches.open(CACHE).then((c) => c.put('./', cl)); }
          return r;
        })
        .catch(() => caches.match('./'))
    );
    return;
  }

  // Everything else: cache first, then network (and cache fonts/icons).
  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) return cached;
      return fetch(e.request).then((r) => {
        if (r && r.ok && (url.origin === location.origin || /jsdelivr|googleapis|gstatic/.test(url.hostname))) {
          const cl = r.clone();
          caches.open(CACHE).then((c) => c.put(e.request, cl));
        }
        return r;
      }).catch(() => caches.match('./'));
    })
  );
});
