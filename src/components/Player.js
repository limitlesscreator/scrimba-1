import React from 'react';
import s from '../styles/player.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPlay,} from "@fortawesome/free-solid-svg-icons";

export const Player = () => {
    return (
        <div className={s.player}>
            <div className={s.timeControl}>
                <p>Start Time</p>
                <input type="range"/>
                <p>End Time</p>
            </div>
            <div className={s.playControl}>
                <FontAwesomeIcon className={s.skipBack} size={'2x'} icon={faAngleLeft}/>
                <FontAwesomeIcon className={s.play} size={'2x'} icon={faPlay}/>
                <FontAwesomeIcon className={s.skipForward} size={'2x'} icon={faAngleRight}/>
            </div>
        </div>
    );
};

