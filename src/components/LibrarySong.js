import React from 'react';
import s from "../styles/library.module.sass";

export const LibrarySong = ({song, setCurrentSong , audioRef, isPlaying}) => {
    const songSelectHandler = () => {
        // const selectedSong = songs.filter(song => song.id === id)
        setCurrentSong(song)

        if (isPlaying){
           const promisePlay = audioRef.current.play()
            if(promisePlay !== undefined){
                promisePlay.then(song => {
                    audioRef.current.play()
                })
            }
        }

    }
    return (
        <div className={s.librarySongs} onClick={songSelectHandler}>
            <img src={song.cover} alt={song.name}/>
            <div className={s.songDescription}>
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

