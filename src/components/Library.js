import React, {useState} from 'react';
import s from '../styles/library.module.sass'
import LibrarySong from "./LibrarySong";

const Library = ({songs, setCurrentSong, setIsPlaying,libraryStatus, audioRef, isPlaying, currentSong, setSongs}) => {

    return (
        <div className={`${s.library} ${libraryStatus ? s.activeLibrary : ''}`}>
            <h2>Library</h2>
            <div className={s.librarySong}>
                {songs.map((song) => {
                    return (
                        <LibrarySong
                            setSongs={setSongs}
                            isPlaying={isPlaying}
                            audioRef={audioRef}
                            songs={songs}
                            setCurrentSong={setCurrentSong}
                            song={song}
                            key={song.id}
                            setIsPlaying={setIsPlaying}
                            currentSong={currentSong}
                            active={song.active}
                            id={song.id}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default Library