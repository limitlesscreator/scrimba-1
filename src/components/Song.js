import React from 'react';
import s from '../styles/song.module.sass'

export const Song = ({currentSong}) => {
    return (
        <div className={s.songContainer}>
            <img className={s.imgSong}  src={currentSong.cover} alt=""/>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    );
};

