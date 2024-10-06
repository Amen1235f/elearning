import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS for animations
import AOS from 'aos';
import cssIcon from '../../assests/images/icons8-css-logo-64.png'; // CSS Icon for display
import './BeginnerCSS.css'; // CSS styles for this component
import { Link } from 'react-router-dom';
const cssLessons = [
  {
    id: 1,
    title: "Introduction to CSS 🎨",
    description: "Learn how to style your web pages with colorful and exciting CSS!",
    example: `body {\n  background-color: lightblue;\n}\nh1 {\n  color: navy;\n  text-align: center;\n}`,
    result: `<h1 style="color: navy; text-align: center;">Welcome to CSS</h1><div style="background-color: lightblue; height: 100px;"></div>`
  },
  {
    id: 2,
    title: "Selectors and Properties 🎯",
    description: "Learn how to target HTML elements using magical selectors!",
    example: `p {\n  color: green;\n  font-size: 20px;\n}\n#myElement {\n  background-color: yellow;\n}`,
    result: `<p style="color: green; font-size: 20px;">This is a magical paragraph</p><div id="myElement" style="background-color: yellow;">This is a colorful div</div>`
  },
  {
    id: 3,
    title: "Box Model 📦",
    description: "Understand how the CSS box model creates boxes for everything on the page!",
    example: `div {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid black;\n  margin: 10px;\n}`,
    result: `<div style="width: 200px; padding: 20px; border: 5px solid black; margin: 10px;">CSS Box Model Example</div>`
  },
  {
    id: 4,
    title: "Colors and Backgrounds 🌈",
    description: "Make your website colorful by changing the background and text colors!",
    example: `h1 {\n  color: red;\n}\nbody {\n  background-image: url('https://example.com/fun-background.jpg');\n}`,
    result: `<h1 style="color: red;">CSS is Fun!</h1><div style="background-image: url('https://example.com/fun-background.jpg'); height: 100px;"></div>`
  },
  {
    id: 5,
    title: "Fun with Fonts ✨",
    description: "Change the way your text looks by using different fonts.",
    example: `p {\n  font-family: 'Comic Sans MS', cursive;\n  font-size: 30px;\n}`,
    result: `<p style="font-family: 'Comic Sans MS', cursive; font-size: 30px;">This text looks super fun!</p>`
  },
  {
    id: 6,
    title: "CSS Flexbox 🚀",
    description: "Learn how to position elements easily with Flexbox!",
    example: `div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n}`,
    result: `<div style="display: flex; justify-content: center; align-items: center; height: 100px; background-color: lightgray;">Centered Content</div>`
  },
  {
    id: 7,
    title: "Responsive Design 📱",
    description: "Make your web pages look good on all devices with media queries!",
    example: `@media (max-width: 600px) {\n  body {\n    background-color: lightgreen;\n  }\n}`,
    result: `<div>Resize your browser to see the background color change!</div>`
  }
];

const BeginnerCSSCourse = () => {
  const [selectedLesson, setSelectedLesson] = useState(cssLessons[0]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="beginner-css-course">
      {/* Sidebar Navigation */}
      <nav className="sidebar-nav">
        <img src={cssIcon} alt="CSS Icon" className="css-icon" />
        <h1 className="course-title">Beginner CSS Course</h1>
        <ul className="lesson-list">
          {cssLessons.map((lesson) => (
            <li key={lesson.id}>
              <button
                onClick={() => setSelectedLesson(lesson)}
                className="lesson-button"
                data-aos="fade-right"
              >
                {lesson.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Lesson Content */}
      <div className="lesson-content" data-aos="fade-up">
        <h2 className="lesson-title">{selectedLesson.title}</h2>
        <p className="lesson-description">{selectedLesson.description}</p>
        <div className="visual-example">
          <h3>Visual Example:</h3>
          <div className="code-example">
            <pre>{selectedLesson.example}</pre>
          </div>
          <div className="code-result">
            <h4>Result:</h4>
            <div dangerouslySetInnerHTML={{ __html: selectedLesson.result }} />
          </div>
        </div>
        <Link to='/CSSQuizGame' className="game-button">navigate to game</Link>

      </div>
    </section>
  );
};

export default BeginnerCSSCourse;
