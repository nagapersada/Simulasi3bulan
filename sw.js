const CACHE_NAME = 'dvteam-v4-final';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './logo.png',
  './icon.png',
  './icon-192x192.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
