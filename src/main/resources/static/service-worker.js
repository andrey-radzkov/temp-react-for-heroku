const OFFLINE_URL = 'offline-page.html';

self.addEventListener('install', function (event) {
  event.waitUntil(
    //TODO: production mode
    caches.open('mysite-dynamic').then(function (cache) {
      return cache.addAll([
        '/',
        OFFLINE_URL,
        'bundle.js',
        'favicon.ico',
        'manifest.json',
      ]);
    })
  );
});
self.addEventListener('fetch', event => {
    if (event.request.mode === 'navigate' ||
      (event.request.method === 'GET' &&
      event.request.headers.get('accept').includes('text/html'))) {
      console.log('Handling fetch event for', event.request.url);
      event.respondWith(
        fetch(event.request).catch(error => {
          console.log('Fetch failed; returning offline page instead.', error);
          return caches.match(OFFLINE_URL);
        })
      );
    }
  }
);
