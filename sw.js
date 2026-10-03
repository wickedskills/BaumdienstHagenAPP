/* BaumWerk Service Worker – Offline-Caching */
const CACHE = 'baumwerk-v8';
const SHELL = [
  './','./index.html','./app.js','./ausruestung.js','./preise_hamburg.js','./inhalte_arbor.js','./inhalte_climb.js',
  './baumarten_a.js','./baumarten_b.js','./baumarten_full.js',
  './manifest.json','./icon-192.png','./icon-512.png',
  './ZTV-Baumpflege_2017.pdf','./ETPS-European-Tree-Pruning-Standard.pdf',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
];
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => null)))));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== CACHE + '-tiles').map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (/tile\.openstreetmap|server\.arcgisonline/.test(url.href)) {
    e.respondWith(caches.open(CACHE + '-tiles').then(c => c.match(req).then(hit => hit || fetch(req).then(res => { if (res.ok) c.put(req, res.clone()); return res; }).catch(() => hit))));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {}); return res; }).catch(() => caches.match('./index.html'))));
});
