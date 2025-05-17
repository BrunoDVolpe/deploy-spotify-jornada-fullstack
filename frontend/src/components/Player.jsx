import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faBackwardStep, faForwardStep, faCirclePause } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const formatTime = (timeInSec) => {
    const minutes = Math.floor(timeInSec / 60).toString().padStart(2, "0")
    const seconds = Math.floor(timeInSec - minutes * 60).toString().padStart(2, "0")

    return `${minutes}:${seconds}`
}

const timeInSeconds = (timeString) => {
    const splitArray = timeString.split(":")
    const minutes = Number(splitArray[0])
    const seconds = Number(splitArray[1])

    return seconds + 60 * minutes
}

const Player = ({ duration, randomIdFromArtist, randomIdFromArtist2, audio }) => {
  const audioPlayer = useRef() //Vamos referenciar o elemento porque nesse estágio o React ainda não o renderizou.
  const progressBar = useRef()
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(formatTime(0))
  const durationInSeconds = timeInSeconds(duration)

  // audioPlayer, como é uma ref, retorna um objeto js. Ao usar o current, ele retorna o elemento da tela,
  // como fazemos com document no console do navegador
  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play()

    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    const instervalId = setInterval(() => {
        if (isPlaying)
            setCurrentTime(formatTime(audioPlayer.current.currentTime))

        progressBar.current.style.setProperty("--_progress", (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%")
    }, 1000)
  
    return () => clearInterval(instervalId)
  }, [isPlaying])
  

  return (
    <div className='player'>
        <div className="player__controllers">
            <Link to={`/song/${randomIdFromArtist}`}>
                <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
            </Link>

            <FontAwesomeIcon className="player__icon player__icon--play"
                icon={isPlaying ? faCirclePause : faCirclePlay}
                onClick={playPause}
                />
            
            <Link to={`/song/${randomIdFromArtist2}`}>
                <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
            </Link>
        </div>
        <div className="player__progress">
            <p>{currentTime}</p>

            <div className="player__bar">
                <div ref={progressBar} className="player__bar-progress"></div>
            </div>
            
            <p>{duration}</p>
        </div>

        <audio ref={audioPlayer} src={audio}></audio>
    </div>
  )
}

export default Player