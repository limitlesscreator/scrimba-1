import React from 'react';
import {Tweet} from "./Tweet";
import {v4} from 'uuid';

export const TweetList = ({name, tweets, setTweets}) => {

    const filteredTweets = (deleteId) => {
        console.log(deleteId)
        console.log(tweets)
        setTweets(tweets.filter((el) => deleteId !== el.id))
    }

    return (
        <div className={'tweet-list'}>
            {tweets.map((el,index) => {
                const specialId = v4()
                return (
                    <Tweet
                        key={specialId}
                        name={name}
                        tweets={el}
                        id={specialId}
                        filteredTweets={filteredTweets}/>
                )
            })}
        </div>
    );
};

