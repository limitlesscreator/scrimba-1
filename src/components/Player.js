import s from '../styles/player.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPlay, faPause} from "@fortawesome/free-solid-svg-icons";

export const Player = ({isPlaying, setIsPlaying, audioRef, songInfo, dragHandler, songs, currentSong, setCurrentSong, setSongs}) => {

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

    // const nextMusic = () => {
    //     // const songJsonData = songs.map(el => JSON.stringify(el))
    //     // const currentSongJSON = JSON.stringify(currentSong)
    //     // console.log(songJsonData)
    //     // console.log(currentSongJSON)
    //     // console.log(songJsonData.indexOf(currentSongJSON))
    //     // console.log(currentSong)
    //     // console.log(songs)
    //     //
    //     // setCurrentSong
    // }

    const skipTrackHandler = (direction) => {
        let currentIndex = songs.findIndex(song => song.id === currentSong.id)
        console.log(currentIndex)
        // setCurrentSong(songs[currentIndex + 1])
        if (direction === 'skip-back') {
            if ((currentIndex - 1) % songs.length === -1) {
                setCurrentSong(songs[songs.length - 1]);
                return;
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length])
        } else if (direction === 'skip-forward') {

            setCurrentSong(songs[(currentIndex + 1) % songs.length])
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

