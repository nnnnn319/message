let data = null

self.addEventListener('connect', (e) => {
    const port = e.ports[0]
    port.addEventListener('message', (e) => {
        if(e.data.get) {
            // 
            data && port.postMessage(data)
        } else {
            data = e.data
        }
    })
    port.start()
})