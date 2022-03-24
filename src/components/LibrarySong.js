import React from 'react';
import s from "../styles/library.module.sass";

export const LibrarySong = ({song}) => {
    return (
        <div className={s.librarySongs}>
            <img   src={song.cover} alt={song.name}/>
            <div className={s.songDescription}>
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

