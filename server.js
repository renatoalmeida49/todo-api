const http = require('http')
const app = require('./app')
const port = process.env.PORT || 5000

const server = http.createServer(app)

server.listen(port)

server.on('error', onError)

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port
    
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges')
            process.exit(1)
            break
        case 'EADDRINUSE':
            console.error(bind + ' is already in use')
            process.exit(1)
            break
        default:
            throw error
    }
}

console.log("http://localhost:" + port)