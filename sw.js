importScripts("dist/wb-assets/precache-manifest.b98597a099bd67d764e9ad4aab2c17cd.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute( self.__precacheManifest || []);
workbox.precaching.precacheAndRoute( ['./index.html', './manifest.webmanifest'] );
console.log('SERVICE WORKER LOADED');

workbox.routing.registerRoute( /\.(?:js|json)$/,
	new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute( /\.css$/,
	new workbox.strategies.StaleWhileRevalidate() );

workbox.routing.registerRoute( /\.(?:png|jpg|jpeg|gif|svg)$/,
new workbox.strategies.CacheFirst() );
