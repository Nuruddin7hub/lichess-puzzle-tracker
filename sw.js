// Minimal service worker for installability. No caching on purpose:
// the tracker must always load the newest page from GitHub Pages.
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { self.clients.claim(); });
self.addEventListener('fetch', function (e) { /* passthrough, no cache */ });
