let data = null
self.addEventListener('message', (e) => {
    console.log('service recieve message', e.data)

    self.clients.matchAll().then(function (clients) {
        if (!clients || clients.length === 0) {
            console.log('clients 0')
            return;
        }
        clients.forEach(function (client) {
            client.postMessage(data);
        });
    })
    data = e.data
})




