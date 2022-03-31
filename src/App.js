import './styles/app.module.sass'
import {Player} from "./components/Player";
import {Song} from "./components/Song";
import {chillHop as data} from './data'
import React, {useRef, useState} from "react";
import Library from "./components/Library";
import {Nav} from "./components/Nav";

export default function App() {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [songs, setSongs] = useState(data())
    const [currentSong, setCurrentSong] = useState(songs[0])
    const [songInfo, setSongInfo] = useState({
        duration: 0,
        currentTime: 0,
        animationPercentage: 0
    })
    const [libraryStatus, setLibraryStatus] = useState(false)

    const timeUpdateHandler = (e) => {
        const currentTime = (e.target.currentTime)
        const duration = (e.target.duration)
        const roundedCurrent = Math.round(currentTime)
        const roundedDuration = Math.round(duration)
        const animationPercentage = Math.round((roundedCurrent / roundedDuration ) * 100)
        setSongInfo({...songInfo, currentTime: currentTime, duration: duration, animationPercentage: animationPercentage})
        console.log(animationPercentage)
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
    }
    return (
        <div>
            <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
            <Song
                currentSong={currentSong}
            />
            <Player
                audioRef={audioRef}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                songInfo={songInfo}
                dragHandler={dragHandler}
                songs={songs}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                setSongs={setSongs}
            />
            <Library
                libraryStatus={libraryStatus}
                songs={songs}
                setCurrentSong={setCurrentSong}
                setIsPlaying={setIsPlaying}
                isPlaying={isPlaying}
                audioRef={audioRef}
                currentSong={currentSong}
                setSongs={setSongs}
            />
            <audio
                onTimeUpdate={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}
                onLoadedMetadata={timeUpdateHandler}>
            </audio>
        </div>
    )
}