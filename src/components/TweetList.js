import React from 'react';
import {Tweet} from "./Tweet";
import {v4} from 'uuid';

export const TweetList = ({name, tweets, setTweets}) => {


    // const deleteTweets = (deleteId) => {
    //     console.log(deleteId)
    //     console.log(tweets)
    //     setTweets(tweets.filter((el) => deleteId !== el.id))
    // }

    return (
        <div className={'tweet-list'}>
            {tweets.map((el) => {
                return (
                    <Tweet
                        key={el.id}
                        name={name}
                        tweet={el}
                        tweets={tweets}
                        setTweets={setTweets}
                        // filteredTweets={filteredTweets}
                    />
                )
            })}
        </div>
    );
};

