 self.addEventListener('install', function (event){
     console.log('SW installed');
     event.waitUntil(
        caches.open('static')
            .then(function (cache){
                cache.addAll([
                    '/js/app.js',
                    '/css/styles.css',
                    'http://localhost:3000/'
                ]);
            })
     );
     
 });

 self.addEventListener('activate', ()=>{
    console.log('SW activated');
})

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
            .then(function(res){
                if(res){
                    return res;
                } else {
                    return fetch(event.request);
                }
            })
    );
});