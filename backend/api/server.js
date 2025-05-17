import express from 'express'
import cors from "cors"
import { db } from './connect.js'

const app = express()
const PORT = 3001 // Rodar esse servidor como: node --watch ./api/server.js

app.use(cors()) //middleware para ajudar a resolver problemas de domínios diferentes
//app.use(express.json()) //exemplo de middleware

app.get('/', (request, response) => {
    response.send('Só vamos trabalhar com os endpoints "/artists/" e "/songs"')
})

app.get('/artists', async (request, response) => {
    response.send(await db.collection('artists').find({}).toArray())
})

app.get('/songs', async (request, response) => {
    response.send(await db.collection('songs').find({}).toArray())
})

app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`)
})