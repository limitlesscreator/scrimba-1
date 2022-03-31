import s from "../styles/library.module.sass";
import {playAudio} from "./util";

const LibrarySong = ({song, setCurrentSong, audioRef, isPlaying, id, active, setSongs, songs}) => {

    const songSelectHandler = () => {

        setCurrentSong(song)

        const newSongs = songs.map((music) => {
            if (music.id === id) {
                return {
                    ...music,
                    active: true,
                };
            } else {
                return {
                    ...music,
                    active: false,
                };
            }
        });
        setSongs(newSongs)
        playAudio(isPlaying,audioRef)
    }
    return (
        <div className={` ${active ? s.selected : s.librarySongs}`} onClick={songSelectHandler}>
            <img src={song.cover} alt={song.name}/>
            <div className={s.songDescription}>
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong
