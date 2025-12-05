const CACHE_NAME = 'dvteam-v20';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './logo.png',
  './DVTMNP-PRO(2).mp3'
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
