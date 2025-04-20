'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/asset/1.jpg": "2c64ab15dd74f40eeafb15c426ea41d5",
"assets/asset/10.jpg": "0ea6c8318d40883c18d7dae7f46be93d",
"assets/asset/11.jpg": "602c9f5386fb9d44593f5184e20c25d1",
"assets/asset/12.jpg": "9344b7e48a6a959bc269343a23eb47b2",
"assets/asset/13.jpg": "6825aa5dcb0036de9dc0621158ee679d",
"assets/asset/14.jpg": "c9704fe3d9f03d35aff328bb09e0a2cd",
"assets/asset/15.jpg": "08b74dfb81819d5b033c05d7735d5355",
"assets/asset/16.jpg": "a190cf4ff9e6aee50e29a6452845466c",
"assets/asset/17.jpg": "7aa246ba61207c2cd0c2a255ff04dc80",
"assets/asset/18.jpg": "979e29eaa507428d247317e4cd70e076",
"assets/asset/19.jpg": "9df9a430f34d07b24ce77f2b01f7895b",
"assets/asset/2.jpg": "e80936eb310493d5d18a59682e61555d",
"assets/asset/20.jpg": "ef198ed79828c8e19cf8464ed1c8f01b",
"assets/asset/3.jpg": "d641eb6cbf413ac091e333e5ffb691da",
"assets/asset/4.jpg": "fa44d89e03d2971d5127768bb0e33153",
"assets/asset/5.jpg": "ef0693a2a43c0efe0a852b984680ed0b",
"assets/asset/6.jpg": "5b21c6ce88d22249509e4a91fcf4ec93",
"assets/asset/7.jpg": "773dbbb02467542733f35907eedd9060",
"assets/asset/8.jpg": "f5766716bb1f3551861963747458ceca",
"assets/asset/9.jpg": "3596a225dbcafc8726604b5ab22ea582",
"assets/asset/event1.jpg": "9ac2471760b82f7ae4c3514f7a4d8c53",
"assets/asset/irfaniyya%2520main%2520image.jpg": "815d51ca7cdf5c11b310fea147952c6f",
"assets/asset/irfaniyya1.jpg": "973c8ee74e2a6f72efa2bffc0aabe1bd",
"assets/asset/irfaniyya2.jpg": "f1c5a03c10d99446d94bf5a3c8d3eedb",
"assets/asset/irfaniyya3.jpg": "9b16d6dd30f49aeed204031bc35e2404",
"assets/asset/irfaniyya4.jpg": "394fe471774dd197e4c5e3f1966b285d",
"assets/asset/loggo.jpg": "ccfa7eb088c5f72b3c6b6af5a17719c8",
"assets/asset/management.jpg": "c6680c997a5e26035bfd2b7f994365f8",
"assets/asset/topimage.jpg": "21c87e30b7bc2aac99b67897e4aa754c",
"assets/asset/topimage2.jpg": "d897a10971ad809adde69d9ad8233b06",
"assets/asset/topimage3.jpg": "28066d7dc17fcfe4e56cc2e865e4edaf",
"assets/asset/topimage4.jpg": "21c87e30b7bc2aac99b67897e4aa754c",
"assets/AssetManifest.bin": "bbb12cb1d04b89e46004d8ab30ca14ad",
"assets/AssetManifest.bin.json": "7471bc5a5e1a0f75075199cfefbb95a4",
"assets/AssetManifest.json": "079895aa2f6cf42de736a7a66ab46151",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "de29a4cb1c01cc23483e38a2b146afd7",
"assets/NOTICES": "51cc1b4aca3de0afceb34b57068d3652",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d5439f116bf35112d86fdb2771364a2b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "df5588ffda916c1dd135dd5fa9cb26b9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a1461896d842b1c3c8ac75e94ff5daf2",
"/": "a1461896d842b1c3c8ac75e94ff5daf2",
"main.dart.js": "9cb8a25a545722bdc4fd0b0b1a4d0716",
"manifest.json": "cd4b4eedc656352e7928d2c14426ccc9",
"version.json": "38d6151154ff65dee22f6d4588a0f52a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
