self.addEventListener('install', e => e.waitUntil(
  caches.open('bw-cashier-v1').then(c => c.addAll(['/bw-cashier/index.html']))
));
self.addEventListener('fetch', e => e.respondWith(
  caches.match(e.request).then(r => r || fetch(e.request))
));