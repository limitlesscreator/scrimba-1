import React from 'react';
import {LibrarySong} from "./LibrarySong";
import s from '../styles/library.module.sass'
import {v4} from "uuid";

export const Library = ({songs}) => {
    return (
        <div className={s.library}>
            <h2>Library</h2>
            <div className={s.librarySong}>
                {songs.map(song => {
                    return (
                        <LibrarySong
                            song={song}
                            key={v4()}
                        />
                    )
                })}
            </div>
        </div>
    );
};

