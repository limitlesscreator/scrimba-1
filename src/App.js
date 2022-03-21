import {CreateTweet} from "./components/CreateTweet";
import {TweetList} from "./components/TweetList";
import {useState, useEffect} from "react";
import {v4} from 'uuid';

export default function App() {
    const [textInput, setTextInput] = useState('')
    const [tweets, setTweets] = useState([])
    const [test, setTest] = useState('Twitter')
    const [name, setName] = useState('Vladislav')

    useEffect(() => {
        console.log('hi')
    },[textInput])


    const userInputHandler = (e) => {
        setTextInput(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        setTweets([{message: textInput, id: v4()},...tweets])
        setTextInput('')
    }


    return (
        <div >
            <h1>{test}</h1>
            <CreateTweet
                textInput={textInput}
                userInputHandler={userInputHandler}
                submitHandler={submitHandler}
                setTextInput={setTextInput}/>

            <TweetList name={name} tweets={tweets} setTweets={setTweets}/>
        </div>
    )
}