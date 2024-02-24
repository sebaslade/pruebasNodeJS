const express = require('express')
const ditto = require('./pokemon/ditto.json')

const app = express()

const PORT = process.env.PORT ?? 1234

app.disable('x-powered-by')

app.use(express.json())

app.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.timestamp = Date.now();
    }
    next();
})
/*
//app.use('/',(req, res, next)=>{ se puede especificar para una url
app.use((req, res, next)=>{
    if(req.method !== 'POST') return next()
    if(req.headers['content-type'] !== 'application/json') return next()
    // solo llegan request que son POST y que tienen el header Content-Type: application/json
    let body = ''

    //escuchar el evento data
    req.on('data', chunk => {
        body += chunk.toString()
    })

    req.on('end', () => {
        const data = JSON.parse(body)
        data.timestamp = Date.now()
        // mutar la request y meter la información en el request.body
        req.body = data
        next()
    })
})
*/

app.get('/pokemon/ditto', (req, res) => {
    res.json(ditto)
})

app.post('/pokemon', (req, res) => {
    // req.body deberíamos guardar en base de datos
    res.status(201).json(req.body)
})

app.use((req, res) =>{
    res.status(404).send('<h1>404 not found</h1>')
})

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})