import React from 'react';
import s from '../styles/librarySong.module.sass'

export const Song = ({currentSong}) => {
    return (
        <div className={s.songContainer}>
            <img   src={currentSong.cover} alt={currentSong.name}/>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    );
};

