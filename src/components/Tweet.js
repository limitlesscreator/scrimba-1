import s from '../styles/Tweet.module.css'
import {useEffect, useState} from "react";
export function Tweet({name, tweets, setTweets, tweet}) {

    const [likes, setLikes] = useState(0)
    const deleteTweet = () => {
        console.log(tweet.id)
        setTweets(tweets.filter(tw => tw.id !== tweet.id))
    }

    return (
        <div className={s.tweet}>
            <h2 style={{color: "white"}}>{tweet.message}</h2>
            <h5 className={s.title}>{name}</h5>
            <button onClick={() => {deleteTweet()}}>Delete this post</button>
            <button onClick={() => setLikes(() => likes + 1)}>Like: {likes + ' <3'}</button>
        </div>
    )
}