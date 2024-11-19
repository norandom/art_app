const CACHE_NAME = 'portfolio-cache-v1';
const RUNTIME_CACHE = 'runtime-cache';

// Resources to pre-cache
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/static/css/main.css',
  '/static/js/main.js',
  '/manifest.json',
  '/favicon.ico',
  '/robots.txt',
  '/sitemap.xml'
];

// Install event: pre-cache critical resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate event: clean up old caches
self.addEventListener('activate', event => {
  const currentCaches = [CACHE_NAME, RUNTIME_CACHE];
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
      })
      .then(cachesToDelete => {
        return Promise.all(
          cachesToDelete.map(cacheToDelete => {
            return caches.delete(cacheToDelete);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Helper function to determine if request is for an image
const isImage = request => {
  return request.destination === 'image';
};

// Helper function to determine if request is for a font
const isFont = request => {
  return request.destination === 'font';
};

// Helper function to determine if request is for static assets
const isStaticAsset = url => {
  return url.pathname.startsWith('/static/');
};

// Fetch event: handle different caching strategies
self.addEventListener('fetch', event => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Return cached response immediately
        return cachedResponse;
      }

      return caches.open(RUNTIME_CACHE).then(cache => {
        return fetch(event.request).then(response => {
          // Cache successful responses
          if (response.status === 200) {
            // Cache strategy based on resource type
            if (isImage(event.request) || isFont(event.request)) {
              // Cache images and fonts indefinitely
              cache.put(event.request, response.clone());
            } else if (isStaticAsset(new URL(event.request.url))) {
              // Cache static assets with network update
              cache.put(event.request, response.clone());
            } else {
              // For other resources, use network first, then cache
              const headers = new Headers(response.headers);
              headers.append('sw-fetched-on', new Date().toISOString());
              cache.put(
                event.request,
                new Response(response.clone().body, {
                  status: response.status,
                  statusText: response.statusText,
                  headers: headers
                })
              );
            }
          }
          return response;
        }).catch(() => {
          // Return cached response if network fails
          return cachedResponse;
        });
      });
    })
  );
});

// Handle push notifications
self.addEventListener('push', event => {
  const options = {
    body: event.data.text(),
    icon: '/favicon.ico',
    badge: '/favicon.ico'
  };

  event.waitUntil(
    self.registration.showNotification('Portfolio Update', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});
