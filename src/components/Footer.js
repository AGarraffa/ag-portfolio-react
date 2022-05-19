import React from 'react';
import email from '../assets/images/email.png';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import youtube from '../assets/images/youtube.png';
import instagram from '../assets/images/instagram.png';

export default function Footer() {
    return (
        <div>
            <div id="contact" className="contact">
                <a href="mailto: agarraffa@gmail.com">
                    <img className="contact-img" src={email} alt="e-mail"></img>
                </a>
                <a href="https://github.com/AGarraffa">
                    <img className="contact-img" src={github} alt="Github"></img>
                </a>
                <a href="https://www.linkedin.com/in/alfred-garraffa-79b64141/">
                    <img className="contact-img" src={linkedin} alt="LinkedIn"></img>
                </a>
                <a href="https://www.youtube.com/channel/UCf-cfu8w2ZfJlMj7svxUHbw">
                    <img className="contact-img" src={youtube} alt="Youtube"></img>
                </a>
                <a href="https://www.instagram.com/al_garraffa/?hl=en">
                    <img className="contact-img" src={instagram} alt="Instagram"></img>
                </a>
            </div>
        </div>
    )
};