'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bd0bda9681279a551c8d26d1ced2ec20",
"assets/AssetManifest.bin.json": "a2aa6d29563724a2656d9bb03f37ad15",
"assets/AssetManifest.json": "b5a1533a4429f59d2786862228d3b4be",
"assets/assets/app_strings.dart": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/img/bg/light_bg.png": "90580d14eb9beb97550b34d44cd40bab",
"assets/assets/img/defaults/default_avatar.png": "d96c2c91caa2043e1da4b89e9031423d",
"assets/assets/img/defaults/default_avatar_meet.png": "bf8fdae57c026b35f5494989eef39eb2",
"assets/assets/img/defaults/default_avatar_zoom.png": "a286392601e2872f1357ded9159c7fcb",
"assets/assets/img/icons/app_icons/c2o_icon.png": "cb3563f172ed9b9bfb17325648bcde2a",
"assets/assets/img/icons/app_icons/c2y_icon.png": "9d065dcb074509a83a9436819510bb5d",
"assets/assets/img/icons/app_icons/i2e_icon.png": "e47b74f95dc619c512a0f1b550110962",
"assets/assets/img/icons/app_icons/info_icon.png": "b921728227c165daca192d15354f0f58",
"assets/assets/img/icons/app_icons/news_icon.png": "37971612c7c53f5f7c243c2b1130c71d",
"assets/assets/img/icons/app_icons/radio_icon.png": "a44289213c7e7eeba85614fb69666e53",
"assets/assets/img/logos/appbar_logo.png": "3eaf56be1612a2da888b3c39f3d252ee",
"assets/assets/img/logos/logo_sml.png": "778723bf1d02ccda24cb106349e82896",
"assets/assets/img/tiles/dl_tile.png": "4ba0aca42939e8eb7f80ac8cef949eeb",
"assets/assets/img/tiles/il_tile.png": "55f9f49f299075abd070c63878034a23",
"assets/assets/img/tiles/news_tile.png": "f14331323ce262e38e6bd7793f1c8a04",
"assets/assets/img/tiles/ol_tile.png": "eda629a626c4e06477c7fd188a13152e",
"assets/assets/img/tiles/pag_tile.png": "d6ecb7fe9be0085e384f1de316eff3d1",
"assets/assets/img/tiles/pi_tile.png": "56b5e43283b3651edc1ad53eb1cfde05",
"assets/assets/img/timetable/inclusee_tile.png": "a058fd363ec12814e2269442a4f2f5e8",
"assets/assets/img/timetable/inclusee_tile_white.png": "3897ebd804b69b5a40c43c7757f70e24",
"assets/assets/img/timetable/specialevents/lourve.png": "7f7d5363dba2f272754870a84b34df30",
"assets/assets/img/timetable/weekly/bibletxt.png": "af90f8622cefdd2c152f7dcba970599b",
"assets/assets/img/timetable/weekly/bookstxt.png": "9eece3a074165f0f57b26a8750db0269",
"assets/assets/img/timetable/weekly/c2ytxt.png": "0052e03e96f92692724c23f845bf0bd2",
"assets/assets/img/timetable/weekly/hhtext.png": "dad6ea6538295d7f4bc91e5d74ffeec3",
"assets/assets/img/timetable/weekly/in2painttile.png": "4d0c542901938c3d344c695d26ef0756",
"assets/assets/img/timetable/weekly/lunchandlearntile.png": "52892395dba8b5449eadc424f6d94518",
"assets/assets/img/timetable/weekly/receipes.png": "c21b1d1e6815d9f41e405875b7032b3e",
"assets/assets/img/timetable/weekly/singingtxt.png": "563f422449ffc598a5b11c1f6d75078a",
"assets/assets/img/timetable/weekly/traveltile.png": "6964ff1ad4749167785b477891810606",
"assets/assets/img/timetable/weekly/triviatxt.png": "ff38a1436d21ad28ca65c959db9f1038",
"assets/assets/img/timetable/weekly/Upskillhourtile.png": "ee6d026823028921a7a027c92bef2a52",
"assets/assets/img/timetable/weekly/wellnesstxt.png": "f9d53d194daa6eb3d0ec145bcbe8a7c7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d19479bb6de461193558fdf28d917198",
"assets/NOTICES": "3d696768fe2078f5063c8a1b6938fb07",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
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
"icons/browserconfig.xml": "97775b1fd3b6e6c13fc719c2c7dd0ffe",
"icons/favicon-16x16.png": "8c1fb31ecc567478d234ef18340af666",
"icons/favicon-32x32.png": "4d9e939f5eb36036ee76c22283a36d31",
"icons/favicon-96x96.png": "08205654efa6a3a6249d4e02ea365776",
"icons/favicon.ico": "8d16aef920a9f99453119cb7c1fc2c07",
"icons/manifest.json": "e50e6a1c9ed6452635d3211f39501e0d",
"icons/ms-icon-144x144.png": "6c129348e6960b9b3670f200373d360e",
"icons/ms-icon-150x150.png": "5022c2bf22710fbb197c46a3ca08e0d1",
"icons/ms-icon-310x310.png": "be9497c21925e4d091ad81514e188131",
"icons/ms-icon-70x70.png": "602874a6f063b1342f7436d9cf627ba2",
"index.html": "899ab46cd89eed729a1b6aa7c4171308",
"/": "899ab46cd89eed729a1b6aa7c4171308",
"jsfunctions.js": "527047b4742849d7741d0e74f3aea90e",
"main.dart.js": "e94c171b3436214968caead1c86c39a3",
"manifest.json": "b5a8a967df78e46328f4db6abd07f563",
"version.json": "e640fb6bb2a22b070c3f374f8c8ae980"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
