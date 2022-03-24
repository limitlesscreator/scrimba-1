import './styles/app.module.sass'
import {Player} from "./components/Player";
import {Song} from "./components/Song";
// https://fontawesome.com/v5/docs/web/use-with/react
import {chillHop as data} from './util'
import {useState} from "react";
import {Library} from "./components/Library";

export default function App() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [songs, setSongs] = useState(data())
    const [currentSong, setCurrentSong] = useState(songs[0])
    return (
        <h1>
            <Song currentSong={currentSong}/>
            <Player
                currentSong={currentSong}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
            />
            <Library songs={songs}/>
        </h1>
    )
}