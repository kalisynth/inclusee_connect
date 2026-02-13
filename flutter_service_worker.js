'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "165400ad901d7f4ce8f0b368c0464b1b",
"assets/AssetManifest.bin.json": "d026b7850b760bdee0f6f1fbfd584e67",
"assets/AssetManifest.json": "144054bd0d84a4fa4a89ee0c33b71f8a",
"assets/assets/app_strings.dart": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/config/vcc_program_table.json": "d6a327651e5160085cb1060e6ec3c950",
"assets/assets/img/appinfobanner.jpg": "4d715feebc96afe571b767b1726a3183",
"assets/assets/img/bg/light_bg.png": "90580d14eb9beb97550b34d44cd40bab",
"assets/assets/img/defaults/default_avatar.png": "d96c2c91caa2043e1da4b89e9031423d",
"assets/assets/img/defaults/default_avatar_meet.png": "bf8fdae57c026b35f5494989eef39eb2",
"assets/assets/img/defaults/default_avatar_zoom.png": "a286392601e2872f1357ded9159c7fcb",
"assets/assets/img/icons/app_icons/c2o_icon.png": "cb3563f172ed9b9bfb17325648bcde2a",
"assets/assets/img/icons/app_icons/c2y_icon.png": "9d065dcb074509a83a9436819510bb5d",
"assets/assets/img/icons/app_icons/channels4_profile.jpg": "1818a8dd99e5b383bc15cd41dc178f59",
"assets/assets/img/icons/app_icons/channels4_youtube.jpg": "49b9ea7c85b3bf6f221c016a5664c0c0",
"assets/assets/img/icons/app_icons/clubinfo_icon.png": "198e24d45d6e6c259470ee9841cc60fe",
"assets/assets/img/icons/app_icons/i2e_icon.png": "e47b74f95dc619c512a0f1b550110962",
"assets/assets/img/icons/app_icons/info_icon.png": "b921728227c165daca192d15354f0f58",
"assets/assets/img/icons/app_icons/kahoot_link_icon.png": "04eea589fe2f771c025f217285ca36b7",
"assets/assets/img/icons/app_icons/kbhelpdoc.png": "9fc188876915bcdd520b59ad91f7fb5b",
"assets/assets/img/icons/app_icons/new%2520news_icon.png": "ebf82c67bd076f63739eeb663e420ba4",
"assets/assets/img/icons/app_icons/news_icon.png": "37971612c7c53f5f7c243c2b1130c71d",
"assets/assets/img/icons/app_icons/radio_icon.png": "a44289213c7e7eeba85614fb69666e53",
"assets/assets/img/logos/appbar_logo.png": "3eaf56be1612a2da888b3c39f3d252ee",
"assets/assets/img/logos/logo_sml.png": "778723bf1d02ccda24cb106349e82896",
"assets/assets/img/tiles/dl_tile.png": "4ba0aca42939e8eb7f80ac8cef949eeb",
"assets/assets/img/tiles/il_tile.png": "55f9f49f299075abd070c63878034a23",
"assets/assets/img/tiles/news_tile.png": "f14331323ce262e38e6bd7793f1c8a04",
"assets/assets/img/tiles/ol_tile.png": "eda629a626c4e06477c7fd188a13152e",
"assets/assets/img/tiles/pag_tile.png": "d6ecb7fe9be0085e384f1de316eff3d1",
"assets/assets/img/tiles/pag_tile_txt.png": "474de3035a16bea8f2bbc1bc8549d4ae",
"assets/assets/img/tiles/pi_tile.png": "56b5e43283b3651edc1ad53eb1cfde05",
"assets/assets/img/timetable/B1_2026/Art%2520Therapy.png": "d2fee86b373a8071568b8866ae657f2e",
"assets/assets/img/timetable/B1_2026/Bible%2520Studies%2520Club.png": "8fe9876f4e4162400c9a3c706bbf943c",
"assets/assets/img/timetable/B1_2026/Book%2520Club.png": "3af69e9ff4e225a42e33b653b904079f",
"assets/assets/img/timetable/B1_2026/Brain%2520Teasers%2520Club%2520Tile.png": "a1c32680aa61d56ab351dea5b554657f",
"assets/assets/img/timetable/B1_2026/Carer's%2520Haven.jpg": "7ec8b61ad38d319b494aded6c701da21",
"assets/assets/img/timetable/B1_2026/Craft%2520Club.png": "04c0619ce7a0cfe026de067dbbc7aad1",
"assets/assets/img/timetable/B1_2026/Digital%2520Help%2520Desk.png": "74a00a38f250528c6c733cfb40be91df",
"assets/assets/img/timetable/B1_2026/Discovery%2520Hub.jpg": "e3addc6ce64352abd40a04fa5b56601f",
"assets/assets/img/timetable/B1_2026/Drawing%2520Club.png": "53e42dbe0277354469a5f846aebb5d20",
"assets/assets/img/timetable/B1_2026/events/Birthday%2520Celebration%2520Club%2520Tile.png": "7d2972e5c2432800166fa09054c01a9e",
"assets/assets/img/timetable/B1_2026/events/Brain%2520Health%2520&%2520Dementia%2520Series.png": "746de12bbc0d7520d9e6d75aec2eb6ac",
"assets/assets/img/timetable/B1_2026/events/Calligraphy%2520Basics%2520Workshop.png": "8c4a408bbcf8193babf91c36c50db23d",
"assets/assets/img/timetable/B1_2026/events/Chinese%2520Medicine%2520&%2520Wellbeing.png": "32508f60e874ae889e8479b8ed36cd18",
"assets/assets/img/timetable/B1_2026/events/Community%2520Feedback%2520Group.png": "f36ba9e56d51bfbd4bd77e0d647d2115",
"assets/assets/img/timetable/B1_2026/events/eSafety%2520Club%2520-%2520eSafety%2520Commissioner.png": "387bb18d285bcde21f61d86a2573a3b6",
"assets/assets/img/timetable/B1_2026/events/Good%2520News%2520Club%2520(Day%2520of%2520Happiness).png": "a5c322a86b6779a8c4a9331db772040c",
"assets/assets/img/timetable/B1_2026/events/Good%2520News%2520Club%2520(Social%2520Justice%2520Day).png": "1258af170835256ffb89510e6b26dfad",
"assets/assets/img/timetable/B1_2026/events/Good%2520News%2520Club%2520(World%2520Radio%2520Day).png": "43ab4e4b6457a22cde0a3a74ab49fd57",
"assets/assets/img/timetable/B1_2026/events/Guest%2520Author%2520HM%2520Hodgson.png": "1705ffc4a829c7f8bb06ae66a1eaab2f",
"assets/assets/img/timetable/B1_2026/events/Health%2520Info%2520Series.png": "e7882c07ca948e11928c0b98cd8cb3a4",
"assets/assets/img/timetable/B1_2026/events/Holocaust%2520Rememberance%2520Day.png": "75afbd509a78f43e0964277163ec8521",
"assets/assets/img/timetable/B1_2026/events/International%2520Mother%2520Language%2520Day.png": "ce55da1a7010f55e3484331aa07eac9c",
"assets/assets/img/timetable/B1_2026/events/International%2520Womens%2520Day.png": "633e6d33755e3bab72aeff55cefd944b",
"assets/assets/img/timetable/B1_2026/events/Life%2520Story%2520Series%2520With%2520Bronte%2520Price.png": "c1391ae67d335b27d7da199aa0bf7620",
"assets/assets/img/timetable/B1_2026/events/Lunch%2520and%2520Laugh.png": "e98ec67457db99bd9678e4a70b13d0ef",
"assets/assets/img/timetable/B1_2026/events/OPAN%2520Webinar.png": "87765c439849a5bc02f72b1eb06039fe",
"assets/assets/img/timetable/B1_2026/events/Poetry%2520Club%2520-%2520World%2520Poetry%2520Day.png": "e447f405377c779a0f1350ee59230fbb",
"assets/assets/img/timetable/B1_2026/events/Special%2520Event.png": "edf2a2fb25976f7fc68054217c1830fd",
"assets/assets/img/timetable/B1_2026/events/The%2520Art%2520&%2520Evolution%2520of%2520the%2520Dinner%2520Party.png": "cddc3d5827e8c022f4a95de7aa954d9f",
"assets/assets/img/timetable/B1_2026/events/World%2520Cancer%2520Day%2520Guest%2520Speaker.png": "8bdc1cb715599e37d8aae6525c3c5b7e",
"assets/assets/img/timetable/B1_2026/events/Yarning%2520Circle%2520With%2520Uncle%2520Gordon.png": "a1b871d7251f34a50280561c7e6376b5",
"assets/assets/img/timetable/B1_2026/Games%2520Club.png": "19226e68c5df1bf89f26f2ec066fee60",
"assets/assets/img/timetable/B1_2026/Gardening%2520Club.png": "95d37bdfb87fe689f7e1d3c618b06082",
"assets/assets/img/timetable/B1_2026/Good%2520News%2520Club.png": "9b056c0bbf91f8e49c3b6fa45ae70e0d",
"assets/assets/img/timetable/B1_2026/Listening%2520Library.png": "85d6f1ea0bed38f91c0eb596e2ffd17f",
"assets/assets/img/timetable/B1_2026/Mens%2520Hour.png": "de4d351cb3dbd50c7dd881b2dd20050a",
"assets/assets/img/timetable/B1_2026/Music%2520Appreciation.png": "d58acc0725343f1a4877632529b2f49b",
"assets/assets/img/timetable/B1_2026/Paint%2520Club.png": "0455443773eb5d7d9e03fafae0b0ddb5",
"assets/assets/img/timetable/B1_2026/Photography%2520Club.png": "6bd422b43d92216f805d966d3c1ae63f",
"assets/assets/img/timetable/B1_2026/Poetry%2520Club.png": "8bc15d270ddac0bd52fd84cacf9c1349",
"assets/assets/img/timetable/B1_2026/Real%2520Conversations%2520With%2520SALT.png": "69dca33021b484c468d3df042574af61",
"assets/assets/img/timetable/B1_2026/Recipes%2520Club.png": "3511da10c37e5289777599b7c3e134dd",
"assets/assets/img/timetable/B1_2026/Sewing%2520Club.png": "7d5156140ea2055cb9a582d62b4ea088",
"assets/assets/img/timetable/B1_2026/Singing%2520Club.png": "e13f3c199ba4cf6c9a0b39d7a9fc917f",
"assets/assets/img/timetable/B1_2026/Stand-up%2520Comedy%2520Club.png": "f215a928c6f37b79bc5e7daf65ec0bbe",
"assets/assets/img/timetable/B1_2026/Sustainability%2520Club.png": "599b718b63493ad8719ff1f38bd0e02d",
"assets/assets/img/timetable/B1_2026/Travel%2520Club.png": "917f2fb13cd9aab2da3f53c5cfffb540",
"assets/assets/img/timetable/B1_2026/Trivia%2520Club.png": "88813f14d893636050934e2c81b2efe1",
"assets/assets/img/timetable/B1_2026/Virtual%2520Field%2520Trip%2520-%2520App%2520Tile.png": "92ad4bbb21f464b4369092b459cb66bc",
"assets/assets/img/timetable/B1_2026/Wellness%2520Club.png": "954133edaada49a15963df4e5de681e1",
"assets/assets/img/timetable/B1_2026/Writers%2520Club.png": "4e76d2f5851395e2fb8b8c10a2df73df",
"assets/assets/img/timetable/daily/Happy%2520Hour.png": "3004d090c6dbcaba77b89e25cb29e4be",
"assets/assets/img/timetable/daily/Morning%2520Meditation.png": "1211945583d89611d522288ec879de56",
"assets/assets/img/timetable/inclusee_tile.png": "a058fd363ec12814e2269442a4f2f5e8",
"assets/assets/img/timetable/inclusee_tile_white.png": "3897ebd804b69b5a40c43c7757f70e24",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a9c410e9451d5d2bf6c63718a7afef36",
"assets/NOTICES": "30402bad8bc5ac5dd20653d7d98515f5",
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
"index.html": "6f65727e23e017e983df507525d26e54",
"/": "6f65727e23e017e983df507525d26e54",
"jsfunctions.js": "527047b4742849d7741d0e74f3aea90e",
"main.dart.js": "bf992b8f25b6e9daa5f99635d1c47642",
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
