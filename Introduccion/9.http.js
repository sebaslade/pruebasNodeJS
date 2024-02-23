const http = require('node:http')
const { findAvailablePort } = require('./10.free-port')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
    console.log("request received")
    res.end("Hola servidor de Node")
})

findAvailablePort(desiredPort).then(port =>{
    server.listen(port, () =>{
        console.log(`server listening on port http://localhost:${port}`)
    })
})


/*
server.listen(0, () => {
    console.log(`server listening on port http://localhost:${server.address().port}`)
})
server.listen(3000 -> El puerto, () => {
    console.log("server listening on port 3000");
});
*/
