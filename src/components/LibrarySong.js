import s from "../styles/library.module.sass";

const LibrarySong = ({song, setCurrentSong, audioRef, isPlaying,id, currentSong,active , setSongs, songs}) => {

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
        if (isPlaying) {
            const promisePlay = audioRef.current.play()
            if (promisePlay !== undefined) {
                promisePlay.then(() => {
                    audioRef.current.play()
                })
            }
        }
    }
    return (
        <div className={` ${active ? s.selected :s.librarySongs }`} onClick={songSelectHandler}>
            <img src={song.cover} alt={song.name}/>
            <div className={s.songDescription}>
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong
