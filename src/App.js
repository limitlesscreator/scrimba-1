// https://coursehunter.net/course/tvorcheskiy-kurs-po-react-i-redux?lesson=1
import './style.css';
import {Tweet} from './components/Tweet'
import {CreateTweet} from "./components/CreateTweet";
import {TweetList} from "./components/TweetList";
import {useState} from "react";

export default function App() {
    // ui is async with state, so when we change state, then ui will be change too
    const [test, setTest] = useState('Hello React')
    const [name, setName] = useState('Vladislav')

    const message = 'I went to sleep today:)'

    const sayHelloHandler = (e) => {
        // console.log(`hello ${user}:)`)
        console.log(e)
        setTest('Hello Everyone')
    }
    return (
        <div>
            <h1>{test}</h1>
            <CreateTweet/>
            <TweetList name={name} message={message}/>
            <button onClick={sayHelloHandler}>Click</button>
        </div>
    )
}