// This is the "Offline page" service worker

//importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

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
        './offline.html',
        './secondpage.html'
      ]))
  );
  return self.skipWaiting();
});




self.addEventListener('push',  (event) => {
  var simpleNotification = {
    body: 'Corpo da notificação',
    icon: 'https://voatest.netlify.app/images/logotipo_black.png',
    vibrate: [100, 50, 100],
    data: {
        dateOfArrival : Date.now(),
        primaryKey: '45'
    },
    actions: [
      {
        action: 'explore',
        title: 'Tudo certo tiu?',
        icon: 'https://static3.tcdn.com.br/files/924236/themes/115/img/settings/logotipo-inverno.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: 'https://static3.tcdn.com.br/files/924236/themes/115/img/settings/logotipo-inverno.png'
      }
    ]
  };
  event.waitUntil(self.registration.showNotification('testeeeeee', simpleNotification));

  //var notificaion = event.data.json();
  //console.log(notificaion, 'será?????????')
  //console.log(notificaion.body, 'bodyyyy')
  //self.registration.showNotification(notificaion.body)
})

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

