if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-ee742793"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Card-CkTCSEQ6.js",revision:null},{url:"assets/CardContent-Dxqn5dxR.js",revision:null},{url:"assets/FareShare-5B3kvFYK.js",revision:null},{url:"assets/FoxGame-rCSTKsIf.js",revision:null},{url:"assets/index-BWdcJW18.js",revision:null},{url:"assets/Landing-DShDaAG7.js",revision:null},{url:"assets/lodash-C40SzmQ8.js",revision:null},{url:"assets/NumPadTrainer-DqYNqHV7.js",revision:null},{url:"assets/RicePurity-RoMTcJ5F.js",revision:null},{url:"assets/Select-BBshPovi.js",revision:null},{url:"assets/Typography-BD1Pz33H.js",revision:null},{url:"index.html",revision:"160701ba6f4e19f942519326108132e0"},{url:"registerSW.js",revision:"e9e39fe728a89ef787e3af050c5b6c00"},{url:"icon-192.png",revision:"9a87427c2de34ba0a04d540491a84a36"},{url:"icon-512.png",revision:"2ec20d1c1c82b16001c9c0e13e0559a4"},{url:"manifest.webmanifest",revision:"01ff13f7f5beaf8297124b0956fb8042"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({request:e})=>"image"===e.destination),new e.CacheFirst({cacheName:"images-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute((({request:e})=>["script","style","document"].includes(e.destination)),new e.StaleWhileRevalidate({cacheName:"static-resources-cache",plugins:[]}),"GET")}));
