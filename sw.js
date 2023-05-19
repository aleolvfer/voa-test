// This is the "Offline page" service worker

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE = "pwabuilder-page";

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "offline.html";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', (event) => {
  console.log("Service worker installed");
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll([
        './',
        './css/*',
        './fonts/*',
        './imagens/*',
        './js/*',
        './offline.html',
        './secondpage.html'
      ]))
  );
  return self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
})

self.addEventListener('fetch', async (event) => {
  const req = event.request;
  const url = new URL(req.url);

  if(url.login === location.origin) {
    event.respondWith(cacheFirst(req));
  }else {
    event.respondWith(networkAndCache(req));
  }
});

async function cacheFirst(req) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(req);

  return cached || fetch(req);
}

async function networkAndCache(req) {
  const cache = await caches.open(CACHE);
  try {
    const refresh = await fetch(req);
    await cache.put(req, refresh.clone());
    return refresh;
  }catch (e){
    const cached = await cache.match(req);
    return cached;
  }
}
