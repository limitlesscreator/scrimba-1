import './style.css';


import React from "react"
import {Navbar} from "./components/Navbar"
import {Hero} from "./components/Hero"
import {Card} from "./components/Card";
import Contacts from "./components/Contacts";


export default function App() {
    const firstName = 'Joe'
    const lastName = 'Schmoe'
    const time = new Date()
    let timeOfDay = time.getHours() >= 13 ? 'afternoon' : 'night'
    return (
        <div>
            <Navbar/>
            good {timeOfDay} {firstName} {lastName} !
            <br/>
            it is currently: {time.getHours() % 12} {time.getHours() >= 13 ? 'pm' : 'am'}
            <Hero/>
            <div className={'flexClass'}>
                <Card cardNumber={1}/>
                <Card cardNumber={2}/>
            </div>
            <div className={'title'}>Cats block :D</div>
            <Contacts/>
        </div>
    )
}