import s from '../styles/player.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPlay, faPause} from "@fortawesome/free-solid-svg-icons";
import {useEffect} from "react";
import {playAudio} from "./util";

export const Player = ({isPlaying, setIsPlaying, audioRef, songInfo, dragHandler, songs, currentSong, setCurrentSong, setSongs, skipTrackHandler}) => {

    useEffect(() => {
        const newSongs = songs.map((music) => {
            if (music.id === currentSong.id) {
                return {
                    ...music,
                    active: true,
                };
            } else {
                return {
                    ...music,
                    active: false,
                };
            }
        });
        setSongs(newSongs)
        playAudio(isPlaying, audioRef)
    }, [currentSong])

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


    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }

    return (
        <div className={s.player}>
            <div className={s.timeControl}>
                <p>{getTime(songInfo.currentTime)}</p>
                <div className={s.track}>
                    <input
                        style={{background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`}}
                        onChange={(e) => dragHandler(e)}
                        min={0}
                        max={songInfo.duration || 0}
                        value={songInfo.currentTime ?? 0}
                        type="range"/>
                    <div style={trackAnim} className={s.animateTrack}></div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
            </div>
            <div className={s.playControl}>
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className={s.skipBack} size={'2x'}
                                 color={'whitesmoke'} icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className={s.play} color={'whitesmoke'} size={'2x'}
                                 icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className={s.skipForward}
                                 color={'whitesmoke'} size={'2x'} icon={faAngleRight}/>
            </div>
        </div>
    );
};

