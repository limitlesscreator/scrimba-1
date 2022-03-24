import React, {useEffect, useRef, useState} from 'react';
import s from '../styles/player.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPlay, faPause} from "@fortawesome/free-solid-svg-icons";

export const Player = ({currentSong, isPlaying, setIsPlaying}) => {
    const audioRef = useRef(null)
    // const [inputValue, setInputValue] = useState(0)
    const [songInfo, setSongInfo] = useState({
        duration: 0,
        currentTime: 0,
    })

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        // setSongInfo({...songInfo, currentTime: e.target.value})
    }

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
        const currentTime = (e.target.currentTime)
        const duration = (e.target.duration)
        // setInputValue(e.target.duration)

        // console.log(e.target.currentTime)
        // console.log((e.target.duration / 100)  * )
        // setInputValue(Math.floor(e.target.currentTime) / (e.target.duration / 100))
        setSongInfo({currentTime, duration})
    }


    return (
        <div className={s.player}>
            <div className={s.timeControl}>
                <p>{getTime(songInfo.currentTime)}</p>
                <input
                    onChange={(e) => dragHandler(e)}
                    min={0}
                    max={songInfo.duration}
                    value={songInfo.currentTime ?? 0}
                    type="range"/>
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className={s.playControl}>
                <FontAwesomeIcon className={s.skipBack} size={'2x'} icon={faAngleLeft}/>
                {/*{isPlaying ?*/}
                {/*    <FontAwesomeIcon onClick={playSongHandler} className={s.play} size={'2x'} icon={faPause}/>:*/}
                {/*    <FontAwesomeIcon onClick={playSongHandler} className={s.play} size={'2x'} icon={faPlay}/>*/}
                {/*}*/}
                <FontAwesomeIcon onClick={playSongHandler} className={s.play} size={'2x'} icon={isPlaying ? faPause : faPlay}/>
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

