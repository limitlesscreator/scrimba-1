import './style.css';


import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

// don't like export default is not good) will refactor soon
export default function App() {
    return (
        <div>
            <Navbar/>
            <Hero/>
        </div>
    )
}