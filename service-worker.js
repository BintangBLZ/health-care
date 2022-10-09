const CACHE_NAME='healthArt v5';
var urlsToCache=[
    "/",
    "index.html",
    "index.js",
    "css/materialize.min.css",
	"css/style.css",
    "js/materialize.min.js",
    "js/bmi.js",
    "js/home.js",
    "js/info.js",
    "js/kalori.js",
    "page/bmi.html",
    "page/home.html",
    "page/info.html",
    "page/kalori.html",
    "nav.html",
    "navFooter.html",
    "image/bckimg.jpg",
    "image/bmi.jpg",
    "image/bmiKal.jpg",
    "image/carbo.jpg",
    "image/food-scale.jpg",
    "image/kaloriKal.jpg",
    "image/lipid.jpg",
    "image/protein.jpg",
    "image/nutritionInfo.jpg",
    "icon/manifest.json",
    "icon/iconMenu.png",
    "icon/favicon.ico",
	"icon/images/icons/icon-72x72.png",
	"icon/images/icons/icon-96x96.png",
	"icon/images/icons/icon-128x128.png",
	"icon/images/icons/icon-144x144.png",
	"icon/images/icons/icon-152x152.png",
	"icon/images/icons/icon-192x192.png",
	"icon/images/icons/icon-384x384.png",
	"icon/images/icons/icon-512x512.png",
];
self.addEventListener('install',function(event){
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache){
            return cache.addAll(urlsToCache);
        })
    );
	
});
self.addEventListener('fetch',function(event){
    event.respondWith(
        caches.match(event.request,{cacheName:CACHE_NAME}).then(
            function(response){
                if(response){
                    console.log("service worker pake aset dari cache",response.url);
                    return response;
                }
                console.log("service worker memuat asset dari server",event.request.url);
            }
        )
    );
});
self.addEventListener("activate",function(event){
    event.waitUntil(
        caches.keys().then(function(cacheName){
            return Promise.all(
                cacheName.map(function(cacheName){
                    if(cacheName!=CACHE_NAME){
                        console.log("service worker:cahche "+cacheName+" dihapus");
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});