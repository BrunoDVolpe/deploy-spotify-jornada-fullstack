import React from 'react'
import Player from '../components/Player'
import { Link, useParams } from 'react-router-dom'
import { songsArray } from '../assets/database/songs'
import { artistArray } from '../assets/database/artists'

const Song = () => {
  const { id } = useParams()

  const songObj = songsArray.filter((currSongObj) => currSongObj._id === id)[0]

  const artistObj = artistArray.filter((currArtistObj) => currArtistObj.name === songObj.artist)[0]

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === songObj.artist)

  // Na aula ele escolheu deixar randômico o avançar e voltar, mas posso implementar incremento e decremento do artistArray,
  // deixando o botão enabled true ou false.
  
  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  )

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id

  const randomIndex2 = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  )

  const randomIdFromArtist2 = songsArrayFromArtist[randomIndex2]._id

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img
            src={songObj.image}
            alt={`Imagem da música ${songObj.name}`}
          />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className='song__artist-image'>
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do artista ${songObj.artist}`}
          />
        </Link>

        <Player duration={songObj.duration}
          randomIdFromArtist={randomIdFromArtist}
          randomIdFromArtist2={randomIdFromArtist2}
          audio={songObj.audio}
          />

        <div>
          <p className='song__name'>{songObj.name}</p>
          <p>{songObj.artist}</p>
        </div>
      </div>
    </div>
  )
}

export default Song