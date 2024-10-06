import React from "react";
import './About.css';

const About = () => {
    const Cards = [
        {
            id: 1,
            title: "What is Programming?",
            description: "Programming is giving a set of instructions to a computer to execute...",
            bubbleClass: "bubble-rocket"
        },
        {
            id: 2,
            title: "HTML and CSS",
            description: "HTML is the standard markup language used to create the structure of web pages...",
            bubbleClass: "bubble-crib"
        },
        {
            id: 3,
            title: "JavaScript Basics",
            description: "JavaScript (often abbreviated as 'JS') is a lightweight, object-oriented language...",
            bubbleClass: "bubble-couple"
        },
        {
            id: 4,
            title: "Game Development",
            description: "Game development is the process of creating video games using technical knowledge and skills...",
            bubbleClass: "bubble-baby"
        },
        {
            id: 5,
            title: "Web Development Projects",
            description: "Putting together HTML and CSS skills to build a personal website...",
            bubbleClass: "bubble-rocket" // Reuse or change as needed
        }
    ];

    return (
        <div className="about-container" data-aos="fade-up">
            <div className="title1" data-aos="fade-up" data-aos-delay="300">
                <h1>Book a Module</h1>
            </div>
            <div className="modules" data-aos="fade-up" data-aos-delay="600">
                {Cards.map((card) => (
                    <div className="module-card" key={card.id} data-aos="fade-up" data-aos-delay={card.id * 200}>
                        <div className={`bubble ${card.bubbleClass}`} />
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        <button>View More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
