import React from 'react';
import s from '../styles/librarySong.module.sass'

export const Song = ({currentSong}) => {
    return (
        <div className={s.songContainer}>
            <img style={{boxShadow: `0px 0px 100px ${currentSong.color[1]}`}}   src={currentSong.cover} alt={currentSong.name}/>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    );
};

