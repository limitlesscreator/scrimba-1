import React, {useEffect, useRef, useState} from 'react';
import s from '../styles/player.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPlay,} from "@fortawesome/free-solid-svg-icons";

export const Player = ({currentSong, isPlaying, setIsPlaying}) => {
    const audioRef = useRef(null)
    const [songInfo, setSongInfo] = useState({
        duration: null,
        currentTime: null,
    })

    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        )
    }

    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause()
            setIsPlaying(false)
        } else {
            audioRef.current.play()
            setIsPlaying(true)
        }
    }
    const timeUpdateHandler = (e) => {
        // const currentTime = Math.floor(Number(e.target.currentTime))
        const currentTime = getTime(e.target.currentTime)
        const duration = getTime(e.target.duration)
        console.log(currentTime)
        setSongInfo({currentTime, duration})
    }


    return (
        <div className={s.player}>
            <div className={s.timeControl}>
                <p>{songInfo.currentTime}</p>
                <input type="range"/>
                <p>{songInfo.duration}</p>
            </div>
            <div className={s.playControl}>
                <FontAwesomeIcon className={s.skipBack} size={'2x'} icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className={s.play} size={'2x'} icon={faPlay}/>
                <FontAwesomeIcon className={s.skipForward} size={'2x'} icon={faAngleRight}/>
            </div>
            <audio
                onTimeUpdate={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}
                onLoadedMetadata={timeUpdateHandler}>
            </audio>
        </div>
    );
};

