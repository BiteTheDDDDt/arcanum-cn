importScripts("dist/wb-assets/precache-manifest.b369f042c72cbb3b63719e6d14e4ee6a.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute( self.__precacheManifest || [] );

console.log('SERVICE WORKER LOADED');

workbox.routing.registerRoute( /\.(?:js|json)$/,
	new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute( /\.css$/,
	new workbox.strategies.StaleWhileRevalidate() );

workbox.routing.registerRoute( /\.(?:png|jpg|jpeg|gif|svg)$/,
new workbox.strategies.CacheFirst() );
