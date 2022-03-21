import React from 'react';
import s from '../styles/song.module.sass'

export const Song = () => {
    return (
        <div className={s.songContainer}>
            <h2>Picture</h2>
            <h2>Song Name</h2>
            <h2>Artist</h2>
        </div>
    );
};

