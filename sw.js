if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const l=e=>i(e,c),o={module:{uri:c},exports:t,require:l};s[c]=Promise.all(n.map((e=>o[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-ee742793"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/FareShare-DJBjJ-aK.js",revision:null},{url:"assets/index-BWDHPaj6.js",revision:null},{url:"assets/index-kQJbKSsj.css",revision:null},{url:"assets/Landing-BW_BsTvh.js",revision:null},{url:"assets/NumPadTrainer-CO6ZGsvp.js",revision:null},{url:"assets/Typography-Byxl5mbt.js",revision:null},{url:"index.html",revision:"1abc802b363c8e47143e42a6c6290fc1"},{url:"registerSW.js",revision:"c233f1b584f82ea028bd0c65a500ccdd"},{url:"icon-192.png",revision:"9a87427c2de34ba0a04d540491a84a36"},{url:"icon-512.png",revision:"2ec20d1c1c82b16001c9c0e13e0559a4"},{url:"manifest.webmanifest",revision:"69c578d4e87ef7d7b6ec5e1057b83e51"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({request:e})=>"image"===e.destination),new e.CacheFirst({cacheName:"images-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute((({request:e})=>["script","style","document"].includes(e.destination)),new e.StaleWhileRevalidate({cacheName:"static-resources-cache",plugins:[]}),"GET")}));
