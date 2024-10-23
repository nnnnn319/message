let data = null
let port = null
self.addEventListener('connect', (e) => {
    port = e.ports[0]
    port.addEventListener('message', (e) => {
        if(e.data.get) {
            // 
            console.log('data get')
            data && port.postMessage(data)
        } else {
            console.log('data post')
            data = e.data
        }
    })
    port.start()
})

