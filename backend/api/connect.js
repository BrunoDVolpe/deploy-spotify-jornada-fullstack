import { MongoClient } from "mongodb"
import 'dotenv/config'

// Senha Chocolate para testes.
const URI = process.env.URI_MONGODB

const client = new MongoClient(URI)

export const db = client.db("spotifyAula")
//const songCollection = await db.collection('songs').find({}).toArray() //Aponto a collection que eu quero, no caso songs.
// O find({}) vai servir para filtrar as informações desnecessárias que vem do Mongo e, pra fechar, convertemos o objeto
// do Mongo para um array JS.

//console.log(songCollection)