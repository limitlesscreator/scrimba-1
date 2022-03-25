import './styles/app.module.sass'
import {Player} from "./components/Player";
import {Song} from "./components/Song";
// https://fontawesome.com/v5/docs/web/use-with/react
import {chillHop as data} from './util'
import React, {useRef, useState} from "react";
import {Library} from "./components/Library";

export default function App() {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [songs, setSongs] = useState(data())
    const [currentSong, setCurrentSong] = useState(songs[0])
    const [songInfo, setSongInfo] = useState({
        duration: 0,
        currentTime: 0,
    })
    const timeUpdateHandler = (e) => {
        const currentTime = (e.target.currentTime)
        const duration = (e.target.duration)
        setSongInfo({currentTime, duration})
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
    }
    return (
        <h1>
            <Song currentSong={currentSong}/>
            <Player
                audioRef={audioRef}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                songInfo={songInfo}
                dragHandler={dragHandler}
            />
            <Library songs={songs} setCurrentSong={setCurrentSong} setIsPlaying={setIsPlaying}  isPlaying={isPlaying} audioRef={audioRef}/>
            <audio
                onTimeUpdate={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}
                onLoadedMetadata={timeUpdateHandler}>
            </audio>
        </h1>
    )
}