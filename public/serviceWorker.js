const cacheName = "v1";

//call install event
self.addEventListener("install", (e) => {
  console.log("Seriver Worker : install");
});

self.addEventListener("activate", (e) => {
  console.log("Seriver Worker : Activated ");
  // Remove unwanted caches from cache storage
  e.waitUntil(
    caches.keys().then((cacheName) => {
      return Promise.all(
        cacheName.map((cache) => {
          if (cache !== cacheName) {
            console.log(`Service Worker: Clearing Old Cache`);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (e) => {
  console.log("Seriver Worker: Fetch ");
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        // Make a clone of response from server
        const resClone = res.clone();
        // open cache in cache storage
        caches
          .open(cacheName)
          .then( cache => {
            // add response to cache in cache Storage
            cache.put(e.request, resClone);
          });
        return res;
      })
      .catch((err) => {
        caches.match(e.request)
          .then((res) => res);
      })
  );
});
