// Define a current cache name
var CACHE_NAME = 'app-cache-v1'

// Add event listeners for when the worker is installed
self.addEventListener('install', event => {
  console.log('Installed')

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache =>
        // fetch and parse webpack.manifest to add js/css assets to cache
        fetch('/assets/webpack.manifest.json')
          .then(response => response.json())
          .then(assets =>
            cache.addAll([
              '/',
              ...(Object.keys(assets)
                .filter(name => name.match(/\.(js|css)/))
                .map(key => assets[key]) || [])
            ])
          )
      )
      .then(() => self.skipWaiting())
  )
})

// Listen for fetch events
self.addEventListener('fetch', event => {
  console.log('trying to fetch are you')

  event.respondWith(
    // First try network, and if not successful fallback to cache
    fetch(event.request).catch(() => caches.match(event.request))
  )
})
