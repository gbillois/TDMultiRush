const CACHE_VERSION = "v3";
const STATIC_CACHE = `multipliRush-static-${CACHE_VERSION}`;
const RUNTIME_CACHE = `multipliRush-runtime-${CACHE_VERSION}`;

const PRECACHE_URLS = [
  "./",
  "index.html",
  "styles.css",
  "game.js",
  "manifest.webmanifest",
  "assets/icons/favicon-16x16.png",
  "assets/icons/favicon-32x32.png",
  "assets/icons/favicon-48x48.png",
  "assets/icons/apple-touch-icon.png",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png",
  "assets/icons/icon-512-maskable.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== STATIC_CACHE && key !== RUNTIME_CACHE)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

function isCacheableAsset(pathname) {
  const lowerPath = pathname.toLowerCase();
  return (
    lowerPath.endsWith(".js") ||
    lowerPath.endsWith(".css") ||
    lowerPath.endsWith(".png") ||
    lowerPath.endsWith(".jpg") ||
    lowerPath.endsWith(".jpeg") ||
    lowerPath.endsWith(".svg") ||
    lowerPath.endsWith(".webp") ||
    lowerPath.endsWith(".json") ||
    lowerPath.endsWith(".webmanifest")
  );
}

function isAppShellRequest(pathname) {
  const clean = pathname.startsWith("/") ? pathname.slice(1) : pathname;
  return (
    clean === "" ||
    clean === "index.html" ||
    clean === "game.js" ||
    clean === "styles.css" ||
    clean === "manifest.webmanifest" ||
    clean === "service-worker.js"
  );
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(STATIC_CACHE).then((cache) => cache.put("index.html", clone));
          return response;
        })
        .catch(() => caches.match("index.html").then((resp) => resp || caches.match("./")))
    );
    return;
  }

  if (!isCacheableAsset(url.pathname)) {
    return;
  }

  // Keep app shell files fresh on iOS Home Screen mode.
  if (isAppShellRequest(url.pathname)) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const clone = response.clone();
            caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => caches.match(request).then((resp) => resp || caches.match("index.html")))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const networkFetch = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok) {
            const clone = networkResponse.clone();
            caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, clone));
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || networkFetch;
    })
  );
});
