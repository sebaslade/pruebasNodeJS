const net = require('node:net')

function findAvailablePort(desiredPort) {
    return new Promise((resolve, reject) => {
        const server = net.createServer()

        server.listen(desiredPort, () => {
            const { port } = server.address()
            server.close(() =>{
                resolve(0)
            })
        })
        server.on('error',(err) =>{
            if(err.code === 'EADDRINUSE'){
                findAvailablePort(0).then(port => resolve(port))
            }else{
                reject(err)
            }
        })
    })
}

module.exports = { findAvailablePort }

/*
server.on('error',(err) =>{
    if(err.code === 'EADDRINUSE'){
        findAvailablePort(0).then(port => resolve(port))
    }else{
        reject(err)
    }
})
*/