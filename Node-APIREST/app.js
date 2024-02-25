const express = require('express') // require -> commonJS 
const crypto = require('node:crypto')


const movies = require('./movies.json')
const { validateMovie } = require('./schemas/movies')

const app = express()
app.use(express.json())
app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express

// Todos los recursos que sean MOVIES se identifica con /movies 
app.get('/movies', (req, res) => {
    const { genre } = req.query
    if (genre) {
        const filteredMovies = movies.filter(
            movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
        )
        return res.json(filteredMovies)
    }
    res.json(movies)
})

app.get('/movies/:id', (req, res) => { // path-to-reqexp
    const { id } = req.params
    const movie = movies.find(movie => movie.id === id)
    if (movie) return res.json(movie)
    res.status(404).json({ message: 'Movie not found' })
})

app.post('/movies', (req, res) => {
    const result = validateMovie(req.body)

    if (!result.success) {
        //422 Unprocessable Entity
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newMovie = {
        id: crypto.randomUUID(), // UUID = Universal Unique Identifier
        ...result.data
    }
    // Esto no es REST, porque estamos guardando el estado de la aplicación en memoria
    movies.push(newMovie)

    res.status(201).json(newMovie) // actualizar la caché del cliente
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
    console.log(`server listening http://localhost:${PORT}`)
})

/*
app.get('/', (req, res) => {
    // leer el query param de format
    const format = req.query.format
    if(format === 'html'){
        res.send('<h1>Hola mundo</h1>')
    }
    res.json({ message: 'Hola mundo' })
})
*/