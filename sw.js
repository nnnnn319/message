let data = null
self.addEventListener('message', (e) => {
    console.log('service recieve message', e.data)
    data = e.data
})




