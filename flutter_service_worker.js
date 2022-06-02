'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6d0c993a885cdc8b254f46a451fc2fc4",
"assets/assets/app_strings.dart": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/img/avatars/default_avatar.png": "d96c2c91caa2043e1da4b89e9031423d",
"assets/assets/img/avatars/default_avatar_meet.png": "bf8fdae57c026b35f5494989eef39eb2",
"assets/assets/img/avatars/default_avatar_zoom.png": "a286392601e2872f1357ded9159c7fcb",
"assets/assets/img/bg/light_bg.png": "90580d14eb9beb97550b34d44cd40bab",
"assets/assets/img/icons/inclusee/incluseeconnect.png": "1c024647ebb7277041cbc3bea86f2374",
"assets/assets/img/icons/inclusee/incluseelogo.png": "f4b3f4f98541961f60f278a0565f491e",
"assets/assets/img/icons/inclusee/incluseelogosmall.png": "778723bf1d02ccda24cb106349e82896",
"assets/assets/img/icons/sq/appmainicon.png": "85a9ad0aa574e544376023798ac35546",
"assets/assets/img/icons/sq/bingo.png": "d056d94c0dcd05db9361fc7399860ead",
"assets/assets/img/icons/sq/c2o.png": "d06d44c18b233d60e2c909cc03745343",
"assets/assets/img/icons/sq/c2y.png": "1b673032a2c555a56f91f547b04871cd",
"assets/assets/img/icons/sq/help.png": "59e651da78520cbb287f92e72c1900ed",
"assets/assets/img/icons/sq/interests.png": "e997dea698eb1aa8a982fcf659e957d0",
"assets/assets/img/icons/sq/radio.png": "37ad678a2d18b9540e74636b1ed81ed5",
"assets/assets/img/icons/sq/tech.png": "6c7525e056b794232ece74a0b3dabc0f",
"assets/assets/img/icons/sq/travel.png": "5ac774d888c0b991b3eb25de11419ced",
"assets/assets/img/icons/sq/trivia.png": "cfb1b2f266e0a98487c41dc3120284d6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "dab1f2acc21d4a13e016f62f77317be2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"canvaskit/canvaskit.js": "3725a0811e16affbef87d783520e61d4",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "491df729e7b715d86fc167feabea031a",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "57bec8d5c24a3a80888b8466d37be1d0",
"icons/android-icon-144x144.png": "6c129348e6960b9b3670f200373d360e",
"icons/android-icon-192x192.png": "07c7902bb6bd693ecaa8dec37ebb8f67",
"icons/android-icon-36x36.png": "3d56503da9db6f97027e9476453462e5",
"icons/android-icon-48x48.png": "6f83a7110f98ab56bf58e3525bfaca37",
"icons/android-icon-72x72.png": "169c2ddb5aebf0a93f9745d477e74d51",
"icons/android-icon-96x96.png": "08205654efa6a3a6249d4e02ea365776",
"icons/apple-icon-114x114.png": "11427ba9b9c49376f8f7b13488a8759d",
"icons/apple-icon-120x120.png": "106a24b1fc5fc9b2721df5d165105b2f",
"icons/apple-icon-144x144.png": "6c129348e6960b9b3670f200373d360e",
"icons/apple-icon-152x152.png": "b0b3ebb139ed179dc3aeed662409c040",
"icons/apple-icon-180x180.png": "30980292511ed0c04e9b87cd3cd817cd",
"icons/apple-icon-57x57.png": "35b058d154a66ad07ff258a8e01d1504",
"icons/apple-icon-60x60.png": "7c6fa9a995417f80955166518b12267f",
"icons/apple-icon-72x72.png": "169c2ddb5aebf0a93f9745d477e74d51",
"icons/apple-icon-76x76.png": "e258c96a4184ad3f3e5bac08f8d5195d",
"icons/apple-icon-precomposed.png": "dd0627728ddaa74eed254538ca02b3e8",
"icons/apple-icon.png": "dd0627728ddaa74eed254538ca02b3e8",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "8c1fb31ecc567478d234ef18340af666",
"icons/favicon-32x32.png": "4d9e939f5eb36036ee76c22283a36d31",
"icons/favicon-96x96.png": "08205654efa6a3a6249d4e02ea365776",
"icons/favicon.ico": "8d16aef920a9f99453119cb7c1fc2c07",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "6c129348e6960b9b3670f200373d360e",
"icons/ms-icon-150x150.png": "5022c2bf22710fbb197c46a3ca08e0d1",
"icons/ms-icon-310x310.png": "be9497c21925e4d091ad81514e188131",
"icons/ms-icon-70x70.png": "602874a6f063b1342f7436d9cf627ba2",
"index.html": "bcd0ead7a1754e4339c855da1a834e36",
"/": "bcd0ead7a1754e4339c855da1a834e36",
"jsfunctions.js": "527047b4742849d7741d0e74f3aea90e",
"main.dart.js": "e5e50da94a285acee12acece396402c7",
"manifest.json": "b5a8a967df78e46328f4db6abd07f563",
"version.json": "4162556d16194ef737c3d9b78eb06ca9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
