import React from 'react';
import ReactDOM from 'react-dom';


// JSX stands for JavaScript XML

function FirstAppComponent(){
    // const h1 = document.createElement('h1')
    // h1.innerHTML = 'test some text stuff'

    const element = (
        <>
            <h1 className={'title'}> This is JSX</h1>
            <p>This is paragraph</p>
        </>
    )
    console.log(element)

    //props: {className: 'title', children: ' This is JSX'}

    const navBar = (
        <nav>
            <h2>website</h2>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )

    // we have to return a single parent element
    // example bellow : ul
    return (
        <>
            {navBar}
            <ul>
                {element}
                {/*<li>${h1}</li>*/}
                <li>Thing 1</li>
                <li>Thing 2</li>
            </ul>
        </>
    )
}

ReactDOM.render(
    <div>
        <FirstAppComponent />
    </div>,
    document.getElementById("root")
)