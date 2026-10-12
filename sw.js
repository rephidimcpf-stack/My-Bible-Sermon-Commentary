/* My Bible — service worker: offline-first shell (instant repeat loads) */
const CACHE = 'my-bible-v3';
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

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // App navigations: serve the cached shell immediately, refresh it in the
  // background (stale-while-revalidate). Instant and fully offline.
  if (e.request.mode === 'navigate') {
    e.respondWith(
      caches.match('./').then((cached) => {
        const net = fetch(e.request)
          .then((r) => {
            if (r && r.ok) { const cl = r.clone(); caches.open(CACHE).then((c) => c.put('./', cl)); }
            return r;
          })
          .catch(() => cached);
        return cached || net;
      })
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
