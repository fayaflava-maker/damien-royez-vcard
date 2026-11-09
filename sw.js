self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>{event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('damien-vcard-')).map(key=>caches.delete(key)))),self.clients.claim()]))});
// Accès réseau normal : la nouvelle carte ne reste pas bloquée en cache.
