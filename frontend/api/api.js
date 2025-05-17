// Fetch ou Axios -- Vamos usar o axios aqui.
import axios from "axios"

const NODE_ENV = import.meta.env.VITE_NODE_ENV
const LOCALHOST = import.meta.env.VITE_LOCAL_URL

const URL = NODE_ENV === "development" ? LOCALHOST : "/api"

const responseArtists = await axios.get(`${URL}/artists`)
const responseSongs = await axios.get(`${URL}/songs`)

export const artistArray = responseArtists.data
export const songsArray = responseSongs.data

//console.log(responseArtists)
//console.log(responseArtists.data)