import s from '../styles/player.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPlay, faPause} from "@fortawesome/free-solid-svg-icons";

export const Player = ({isPlaying, setIsPlaying, audioRef, songInfo, dragHandler}) => {

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

    return (
        <div className={s.player}>
            <div className={s.timeControl}>
                <p>{getTime(songInfo.currentTime)}</p>
                <input
                    onChange={(e) => dragHandler(e)}
                    min={0}
                    max={songInfo.duration || 0}
                    value={songInfo.currentTime ?? 0}
                    type="range"/>
                <p>{getTime(songInfo.duration) === `NaN:aN` ? '0:00' : getTime(songInfo.duration)}</p>
            </div>
            <div className={s.playControl}>
                <FontAwesomeIcon className={s.skipBack} size={'2x'} color={'whitesmoke'} icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className={s.play} color={'whitesmoke'} size={'2x'}
                                 icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon className={s.skipForward} color={'whitesmoke'} size={'2x'} icon={faAngleRight}/>
            </div>
        </div>
    );
};

