import React from 'react';
import {Tweet} from "./Tweet";

export const TweetList = ({name, message}) => {

    return (
        <div className={'tweet-list'}>
            <Tweet name={name} message={message}/>
            <Tweet name={name} message={message}/>
            <Tweet name={name} message={message}/>
        </div>
    );
};

