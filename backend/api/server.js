import express from 'express'
import cors from "cors"
import { db } from './connect.js'
import path from 'path'
import 'dotenv/config'

const __dirname = path.resolve()

const app = express()
const PORT = process.env.PORT // Rodar esse servidor como: node --watch ./api/server.js

app.use(cors()) //middleware para ajudar a resolver problemas de domínios diferentes
//app.use(express.json()) //exemplo de middleware

app.get('/api/', (request, response) => {
    response.send('Só vamos trabalhar com os endpoints "/artists/" e "/songs"')
})

app.get('/api/artists', async (request, response) => {
    response.send(await db.collection('artists').find({}).toArray())
})

app.get('/api/songs', async (request, response) => {
    response.send(await db.collection('songs').find({}).toArray())
})

app.use(express.static(path.join(__dirname, "../frontend/dist")))

app.get('*other_routes', async(request, response) => {
    response.sendFile(path.join(__dirname, "../frontend/dist/index.html"))
})

app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`)
})