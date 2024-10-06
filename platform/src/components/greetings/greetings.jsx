import React from 'react';
import './greetings.css';

const greetings = [
    { language: 'English', text: 'Hello', icon: 'fas fa-smile' },
    { language: 'Spanish', text: 'Hola', icon: 'fas fa-star' },
    { language: 'French', text: 'Bonjour', icon: 'fas fa-rocket' },
    { language: 'German', text: 'Hallo', icon: 'fas fa-gift' },
    { language: 'Japanese', text: 'こんにちは (Konnichiwa)', icon: 'fas fa-cogs' },
    { language: 'Chinese', text: '你好 (Nǐ hǎo)', icon: 'fas fa-globe' },
    { language: 'Russian', text: 'Здравствуйте (Zdravstvuyte)', icon: 'fas fa-heart' }
];

const Slider = () => {
    return (
        <div className="slider-container">
            <div className="slider">
                {greetings.map((greeting, index) => (
                    <div className="slide" key={index}>
                        <i className={`slide-icon ${greeting.icon}`}></i>
                        <h1>{greeting.text}</h1>
                        <p>{greeting.language}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
