if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/theng-web-apps/sw.js', { scope: '/theng-web-apps/' })})}