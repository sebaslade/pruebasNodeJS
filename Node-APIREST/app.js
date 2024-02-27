const express = require('express') // require -> commonJS 
const crypto = require('node:crypto')


const movies = require('./movies.json')
const { validateMovie, validatePartialMovie } = require('./schemas/movies')

const app = express()
app.use(express.json())
app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express

// Todos los recursos que sean MOVIES se identifica con /movies 
app.get('/movies', (req, res) => {
    //res.header('Access-Control-Allow-Origin', '*')

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
        id: crypto.randomUUID(), // uuid v4
        ...result.data
    }

    // Esto no sería REST, porque estamos guardando
    // el estado de la aplicación en memoria
    movies.push(newMovie)

    res.status(201).json(newMovie)
})

app.patch('/movies/:id', (req, res) => {
    const result = validatePartialMovie(req.body)
    
    if(!result.success){
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    
    const { id } = req.params
    const movieIndex = movies.findIndex(movie => movie.id === id)

    if (movieIndex === -1){ 
        return res.status(404).json({ message: 'Movie not found' })
    }

    const updateMovie ={
        ...movies[movieIndex],
        ...result.data
    }

    movies[movieIndex] = updateMovie

    return res.json(updateMovie)
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