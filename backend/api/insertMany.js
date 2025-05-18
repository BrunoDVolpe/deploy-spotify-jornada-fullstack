import { artistArray } from "../../frontend/src/assets/database/artists.js";
import { songsArray } from "../../frontend/src/assets/database/songs.js";
import { db } from "./connect.js";

// Vamos usar esse arquivo uma vez só pra popular o banco com nossos dados.
// Se for a primeira vez, é necessário descomentar os dados em songs e artists; e comentar o import atual dos arquivos.
// Antes de subir vamos tratar os dados para remover o id que temos e deixar o banco criar um automático e mais robusto
const newArtistArray = artistArray.map((currArtistObj) => {
  const newArtistObj = { ...currArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
});

const newSongsArray = songsArray.map((currSongObj) => {
  const newSongObj = { ...currSongObj };
  delete newSongObj.id;

  return newSongObj;
});

// Já usei pra popular o banco online, por isso está comentado. se for a primeira vez a popular o banco, descomentar essas duas linhas.
//const responseSongs = await db.collection('songs').insertMany(newSongsArray)
//const responseArtists = await db.collection('artists').insertMany(newArtistArray)

console.log(responseSongs);
console.log(responseArtists);

//console.log(newArtistArray)
//console.log(newSongsArray)
