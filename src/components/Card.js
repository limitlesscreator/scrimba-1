import React from 'react';
import sportsMan from '../images/katie-zaferes.png'
import star from '../images/star.png'

export const Card = (props) => {
    return (
        <div className="card">
            card number {props.cardNumber}
            <img src={sportsMan} className="card--image"/>
            <div className="card--stats">
                <img src={star}/>
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    );
};

