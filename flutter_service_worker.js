'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "51ba9a3bf978cba3d2c4d0c4203234a6",
"assets/assets/app_strings.dart": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/img/avatars/CSO/andrea.jpg": "4ff9f6f8d40ab794ebad03de00d8cbff",
"assets/assets/img/avatars/CSO/jacinta.jpg": "545f79449473b53066a2b5afe6643e41",
"assets/assets/img/avatars/CSO/jessicap.jpg": "78dc413ebe71dba70812076ad2710e64",
"assets/assets/img/avatars/CSO/jessicaw.jpg": "f4eab7fefdeeae3a01c01704e7cdae02",
"assets/assets/img/avatars/CSO/kate.jpg": "f5b6f998d766051ba2c18f44f54aabaa",
"assets/assets/img/avatars/CSO/kristie.png": "55f7c7a2b799a032f428a5a0684cc754",
"assets/assets/img/avatars/CSO/lisa.jpg": "dd72c7d83e13754b063283de23e5ab6c",
"assets/assets/img/avatars/CSO/mere.jpg": "19899746180aed7800da894c5ccebf7c",
"assets/assets/img/avatars/CSO/nick.jpg": "a55854e8dd479df11251400b79d4432a",
"assets/assets/img/avatars/CSO/sandra.jpg": "4f343a5b128cb198722b221f9eb9ecbc",
"assets/assets/img/avatars/CSO/tanya.jpg": "a075cdb18334978685231a5dad4ab83b",
"assets/assets/img/avatars/default_avatar.png": "d96c2c91caa2043e1da4b89e9031423d",
"assets/assets/img/avatars/default_avatar_meet.png": "bf8fdae57c026b35f5494989eef39eb2",
"assets/assets/img/avatars/default_avatar_zoom.png": "a286392601e2872f1357ded9159c7fcb",
"assets/assets/img/bg/light_bg.png": "90580d14eb9beb97550b34d44cd40bab",
"assets/assets/img/icons/goweek/bmt.png": "cf5f2d36aa1802515586c01eb084a6c7",
"assets/assets/img/icons/goweek/bmtnotext.png": "110f6f912c2e50c5a2eb901e54cbdee4",
"assets/assets/img/icons/goweek/In2Bingo.png": "ac38ae0c15defd577673efecc96525c1",
"assets/assets/img/icons/goweek/In2Books.png": "2b7551079a00a5069f2d49380ddc970a",
"assets/assets/img/icons/goweek/In2Craft.png": "2608829f8e746d91578595ac973f3f73",
"assets/assets/img/icons/goweek/in2eSafety.png": "627aa33defb88be518858b62da6b9eac",
"assets/assets/img/icons/goweek/In2Gardening.png": "982d9dcea584eb435c7440d45943ecc1",
"assets/assets/img/icons/goweek/In2Movies.png": "cb29b8cc0d0934895aaf1abeadc11b37",
"assets/assets/img/icons/goweek/In2Sheds.png": "42fcc40115db588d0d5938dceb938fe6",
"assets/assets/img/icons/goweek/In2Storytelling.png": "5759d30684e6618d5a581d646ad6f47f",
"assets/assets/img/icons/goweek/In2Travel.png": "4abfbc12f13eec9dd78be86dd490ed3f",
"assets/assets/img/icons/goweek/In2Trivia.png": "a6bf3e5a381dce7e2f4b1eba03ce95d3",
"assets/assets/img/icons/goweek/In2Wellness.png": "c724d4103e864cbef778cf918ae9e001",
"assets/assets/img/icons/goweek/inbingo.png": "ef1459b9463d4a38ae1e368abf405782",
"assets/assets/img/icons/goweek/inbooks.png": "44187b7897caf1d0bde5fa36d94d3345",
"assets/assets/img/icons/goweek/incraft.png": "09654c85954db0d05cb11504dd62deee",
"assets/assets/img/icons/goweek/ingarden.png": "55960bfe72add8294d9034358ab90118",
"assets/assets/img/icons/goweek/inmovies.png": "b01d06cb11bcb0c93d7f00a4ca854b4f",
"assets/assets/img/icons/goweek/insafe.png": "1bbd0b1f9b43a6f3812898890a8c0ab6",
"assets/assets/img/icons/goweek/insafefri.png": "5c906367240c1f818358b1739e592f6a",
"assets/assets/img/icons/goweek/inshed.png": "04cdb8ba6197508fe185e660e944522e",
"assets/assets/img/icons/goweek/instory.png": "c68905f2467e2dd91bf91f7af6f9666b",
"assets/assets/img/icons/goweek/intravel.png": "960bf6640cd34ed7ff6455ce7d33d0fa",
"assets/assets/img/icons/goweek/intravelwed.png": "ae53682114dddc8866283927af8c2abb",
"assets/assets/img/icons/goweek/intrivia.png": "8d4142de43ced000e5c887dacf64b9cd",
"assets/assets/img/icons/goweek/inwell.png": "44ba08d563df515903678627b6584be1",
"assets/assets/img/icons/goweek/l2c.png": "39e11fb6a31cd8edac9cae8f5b8db911",
"assets/assets/img/icons/goweek/l2p.png": "8dc41403d1fac93fa0efdcec893058d0",
"assets/assets/img/icons/goweek/Learn2Cook.png": "8fb65f16fe23365427d9a53714508acb",
"assets/assets/img/icons/goweek/split/bmtSplit.png": "fd26ac594a6608ffe492c55c43f0afc4",
"assets/assets/img/icons/goweek/split/In2Bingo.png": "b02a06bcbd55c1282b86725710664f1a",
"assets/assets/img/icons/goweek/split/In2Books.png": "9a77152ac50ed96ea6f6b99ecbef3227",
"assets/assets/img/icons/goweek/split/In2Craft.png": "f4947c0f2761fb77c2c69587002d192c",
"assets/assets/img/icons/goweek/split/In2eSafety.png": "69a33928ff156df7a0abbe63382a2608",
"assets/assets/img/icons/goweek/split/In2Gardening.png": "6903ab4b6fa3d164d6cab6d4c41568d3",
"assets/assets/img/icons/goweek/split/In2Movies.png": "7585df410413b2fbc99a0d9dff90f142",
"assets/assets/img/icons/goweek/split/In2Sheds.png": "a8b67f86ce1c2df3159bdbc87952ffae",
"assets/assets/img/icons/goweek/split/In2Storytelling.png": "7f6384998920860a2b8a36406cf2ec5e",
"assets/assets/img/icons/goweek/split/In2Travel.png": "9f37876303aad14fbc094707333a0ada",
"assets/assets/img/icons/goweek/split/In2Trivia.png": "f23f0d2ed10b5d042274111908d4ae63",
"assets/assets/img/icons/goweek/split/In2Wellness.png": "11ffe98e273c140ad65d99ee6b06bf2f",
"assets/assets/img/icons/goweek/split/Learn2Cook.png": "8716161631f472be26643645943536d9",
"assets/assets/img/icons/goweek/split/Learn2Paint.png": "ecd16db7a51dfa257d1b891babcb9e4e",
"assets/assets/img/icons/inclusee/incluseeconnect.png": "3eaf56be1612a2da888b3c39f3d252ee",
"assets/assets/img/icons/inclusee/incluseelogo.png": "f4b3f4f98541961f60f278a0565f491e",
"assets/assets/img/icons/inclusee/incluseelogosmall.png": "778723bf1d02ccda24cb106349e82896",
"assets/assets/img/icons/rd/c2oapp.png": "8062094dfc68575f42cce7887bcd51cd",
"assets/assets/img/icons/rd/c2yapp.png": "7e54aa05535cc5dcb0a636f60c51ba13",
"assets/assets/img/icons/rd/gowrd.png": "28645ce0ad0241a7473db6fe206e601a",
"assets/assets/img/icons/rd/In2Books.png": "37971612c7c53f5f7c243c2b1130c71d",
"assets/assets/img/icons/rd/In2Crafts.png": "a2a4deb55496ed748d5c8ce283f41a00",
"assets/assets/img/icons/rd/In2Gardening.png": "cb54737178d5ad40a3a328a7684bd88b",
"assets/assets/img/icons/rd/In2Movies.png": "c71a38f0a8ae0b6cbe56596b5c7fe7a1",
"assets/assets/img/icons/rd/InSheds.png": "4f617ceaf9867c56c5b14b9a14bb708f",
"assets/assets/img/icons/rd/interestsapp.png": "cefbba157f20bb30c771ee174afc78e2",
"assets/assets/img/icons/rd/radioapp.png": "a44289213c7e7eeba85614fb69666e53",
"assets/assets/img/icons/rd/rdconnect2one.png": "cb3563f172ed9b9bfb17325648bcde2a",
"assets/assets/img/icons/rd/rdconnect2you.png": "9d065dcb074509a83a9436819510bb5d",
"assets/assets/img/icons/rd/rdincluseeltdradio.png": "6dd09c6501586f063c73ca0970d8716c",
"assets/assets/img/icons/rd/rdinterests2enjoy.png": "e47b74f95dc619c512a0f1b550110962",
"assets/assets/img/icons/rd/rdlearn2tech.png": "046ea1d852770bc9a0c584dfa222b80f",
"assets/assets/img/icons/rd/support.png": "b921728227c165daca192d15354f0f58",
"assets/assets/img/icons/rd/techapp.png": "09858ea3aa656c4b0e3786d1433f2c37",
"assets/assets/img/icons/sq/appmainicon.png": "85a9ad0aa574e544376023798ac35546",
"assets/assets/img/icons/sq/bingo.png": "d056d94c0dcd05db9361fc7399860ead",
"assets/assets/img/icons/sq/c2o.png": "d06d44c18b233d60e2c909cc03745343",
"assets/assets/img/icons/sq/c2y.png": "1b673032a2c555a56f91f547b04871cd",
"assets/assets/img/icons/sq/gowtile.png": "9e643044e0b3b168ce95769b5f096f21",
"assets/assets/img/icons/sq/help.png": "59e651da78520cbb287f92e72c1900ed",
"assets/assets/img/icons/sq/interests.png": "e997dea698eb1aa8a982fcf659e957d0",
"assets/assets/img/icons/sq/radio.png": "37ad678a2d18b9540e74636b1ed81ed5",
"assets/assets/img/icons/sq/tech.png": "6c7525e056b794232ece74a0b3dabc0f",
"assets/assets/img/icons/sq/travel.png": "5ac774d888c0b991b3eb25de11419ced",
"assets/assets/img/icons/sq/trivia.png": "cfb1b2f266e0a98487c41dc3120284d6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "ef852fbffb69a8b2c86cbe83b307dd55",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "36f0824f284e284cb057c51dbef78840",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
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
"index.html": "a388adf9f4fdc36ee2ed4e6f4cbea855",
"/": "a388adf9f4fdc36ee2ed4e6f4cbea855",
"jsfunctions.js": "527047b4742849d7741d0e74f3aea90e",
"main.dart.js": "f282bf325b329c7e5d21624aaf72a21f",
"manifest.json": "b5a8a967df78e46328f4db6abd07f563",
"version.json": "e640fb6bb2a22b070c3f374f8c8ae980"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
