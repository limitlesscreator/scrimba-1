import React from "react"
import img1 from '../images/airbnb-logo.png'

export  function Navbar() {
    return (
        <nav>
            <img src={img1} className="nav--logo"/>
        </nav>
    )
}