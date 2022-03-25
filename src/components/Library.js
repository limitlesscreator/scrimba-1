import React from 'react';
import {LibrarySong} from "./LibrarySong";
import s from '../styles/library.module.sass'
import {v4} from "uuid";

export const Library = ({songs,setCurrentSong,setIsPlaying,audioRef,isPlaying}) => {
    return (
        <div className={s.library}>
            <h2>Library</h2>
            <div className={s.librarySong}>
                {songs.map((song) => {
                    return (
                        <LibrarySong
                            isPlaying={isPlaying}
                            audioRef={audioRef}
                            songs={songs}
                            setCurrentSong={setCurrentSong}
                            song={song}
                            key={song.id}
                            setIsPlaying={setIsPlaying}
                        />
                    )
                })}
            </div>
        </div>
    );
};

