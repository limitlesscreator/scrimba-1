// https://coursehunter.net/course/tvorcheskiy-kurs-po-react-i-redux?lesson=1
import './style.css';
import {Tweet} from './components/Tweet'
import {CreateTweet} from "./components/CreateTweet";
import {TweetList} from "./components/TweetList";
import {useState} from "react";

export default function App() {
    const [textInput, setTextInput] = useState('')
    const [tweets, setTweets] = useState(['christmas', 'summer'])
    const [test, setTest] = useState('Hello React')
    const [name, setName] = useState('Vladislav')



    const userInputHandler = (e) => {
        setTextInput(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        setTweets([textInput,...tweets])
        setTextInput('')
    }


    return (
        <div>
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