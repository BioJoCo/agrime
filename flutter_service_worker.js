'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9640f68e036fdb86af3804b2298d6336",
"version.json": "2eebc82143d51876c6a60652054cd34d",
"index.html": "ee5daf1a4a38c84766769873013ad8aa",
"/": "ee5daf1a4a38c84766769873013ad8aa",
"main.dart.js": "d69eac5f3f7638d7f391b33e0770c8b4",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "55bf096d1d5509d7deae5a449b543e13",
"icons/Icon-192.png": "ec6a39222f0f954eeb9d7732ae4152cb",
"icons/Icon-maskable-192.png": "f1aa02856a242dc090f4095c29a1fbd2",
"icons/Icon-maskable-512.png": "4264ce6a62e198b813bc2f60f88687cf",
"icons/Icon-512.png": "9a2b8af63aa186e5fd375b843cc98818",
"manifest.json": "fc67834d575b6eb0e2b430e28e500f34",
"assets/AssetManifest.json": "b83caf312440b2a4730b74c3c621ee00",
"assets/NOTICES": "e034f0289483d82f4d796695c8e65db7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "58ea6f3311908dda436f62c5e0f2b1ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2b80bcb69795762e2db011dd018dfc33",
"assets/fonts/MaterialIcons-Regular.otf": "3952a0f82eb02007fdb1e4f04d874acd",
"assets/assets/svg/lang_ar.svg": "7238cff5f1fcfa4d6326667d03907b37",
"assets/assets/svg/lang_en.svg": "8c79459b61c790578f3a80d879861287",
"assets/assets/images/desktop/logo.png": "ca4aba8a557b386d67793b0a8f4e1d8d",
"assets/assets/images/desktop/meddil-east-loading.json": "ff2f4fdb8fe07aad6cc71fef9ff0fe1e",
"assets/assets/images/desktop/meddil-east-loading.gif": "daaa4007613dfe4bb36840740f4a6fce",
"assets/assets/images/why%2520choose%2520us/support.png": "df8721c57f9670e864eedd8992b5c8f0",
"assets/assets/images/why%2520choose%2520us/continuous_development.png": "d46154340dda66f27077294bc44ee8aa",
"assets/assets/images/why%2520choose%2520us/quality.png": "5179f175ce32865e7c68e162b2a4655f",
"assets/assets/images/why%2520choose%2520us/trust.png": "5c6cbb16d64ffc255ef2eee0445d76fa",
"assets/assets/images/why%2520choose%2520us/solutions.png": "a9b09a9857fb667f95d3d75581f72f42",
"assets/assets/images/about_us/ltr_bg.png": "029d90b14b4f5913ff12ed4fa73073d4",
"assets/assets/images/about_us/bg_mob.png": "63d87f3d56ed0706c4bac7d47d2d8972",
"assets/assets/images/about_us/bg_dark_mob.png": "08b14bbe09ff38252266e9c1b53c472b",
"assets/assets/images/about_us/ltr_bg_dark.png": "fd756c06b5751f03cd76b858f23fb79e",
"assets/assets/images/about_us/ltr_bg_dark_mob.png": "e8c2383d5b71f45ade8404270014bb20",
"assets/assets/images/about_us/bg_dark.png": "f62adb0aac46fb481d32281a5b8e1787",
"assets/assets/images/about_us/about-us.png": "7451b82ee5bb1dd3695e03ebd05f23ab",
"assets/assets/images/about_us/ltr_bg_mob.png": "ef4a9e00ebd28ef24b7b5c688cb3d310",
"assets/assets/images/about_us/bg.png": "fa1845caca2f0246d03d0bb3a37cc30e",
"assets/assets/images/fotter/mail.png": "497eec9427d7713400ee93dcf2b9def0",
"assets/assets/images/fotter/linkdin.png": "f59b2768bf3228c18a3478a96861ab1a",
"assets/assets/images/fotter/logo.png": "ca4aba8a557b386d67793b0a8f4e1d8d",
"assets/assets/images/fotter/twitter.png": "57d31dc7353a0ebb66ee03b396ad62ea",
"assets/assets/images/fotter/location.png": "5977577e3fe0149b8b01e80f408a1b39",
"assets/assets/images/fotter/call.png": "3fe555b75b76e56d19cf950312b5e116",
"assets/assets/images/fotter/youtube.png": "096352110fbcd0412085f6621bf40c73",
"assets/assets/images/fotter/facebook.png": "83a2e8e7c470077d27aaca3d36f7b369",
"assets/assets/animation/logo.gif": "b3852fec8a5ce579f1c15d6147c128df",
"assets/assets/translations/en.json": "b361e218aeb95f0108b0fa2a2dc32b49",
"assets/assets/translations/ar.json": "23efbd602bc807110caaf320a6e242ac",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
