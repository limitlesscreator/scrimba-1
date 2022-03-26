import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMusic} from "@fortawesome/free-solid-svg-icons";
import s from '../styles/nav.module.sass'

export const Nav = ({libraryStatus,setLibraryStatus}) => {
    return (
        <nav>
            <h1>Waves</h1>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                <span>Library</span>
                <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
    );
};

