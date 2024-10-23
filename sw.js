let data = null
self.addEventListener('message', (e) => {
    if(e.get) {
        console.log('service get  message')
        self.clients.matchAll().then(function (clients) {
            if (!clients || clients.length === 0) {
                console.log('clients 0')
                return;
            }
            clients.forEach(function (client) {
                client.postMessage(data);
            });
        })
    } else {
        console.log('service set message')
        data = e.data
    }
    // console.log('service recieve message', e.data)

   
})




