import React from 'react';
import cat1 from '../images/cats/felix.png'
import cat2 from '../images/cats/fluffykins.png'
import cat3 from '../images/cats/mr-whiskerson.png'
import cat4 from '../images/cats/pumpkin.png'

const catsData = [
    {name: 'Mr. Whiskerson', number: '(212) 555-1234', img: cat1, mail: 'mr.whiskaz@catnap.meow'},
    {name: 'Fluffykins', number: '(212) 555-2345', img: cat2, mail: 'fluff@me.com'},
    {name: 'Felix', number: '(212) 555-4567', img: cat3, mail: 'thecat@hotmail.com'},
    {name: 'Pumpkin', number: '(0800) CAT KING', img: cat4, mail: 'pumpkin@scrimba.com'},
]

const Contacts = () => {
    return (
        <div className="contacts">
            {catsData.map(el => {
                return (
                    <div className="contact-card">
                        <img src={el.img}/>
                        <h3>{el.name}</h3>
                        <div className="info-group">
                            <img src="./images/phone-icon.png"/>
                            <p>{el.number}</p>
                        </div>
                        <div className="info-group">
                            <img src="./images/mail-icon.png"/>
                            <p>{el.mail}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Contacts;