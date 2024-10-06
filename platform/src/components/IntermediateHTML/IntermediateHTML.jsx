import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import htmlIcon from '../../assests/images/icons8-html5-64.png'; // Kid-friendly icon for HTML
import './IntermediateHTML.css'; // Import styles for this section
import { Link } from 'react-router-dom';

const lessons = [
  { 
    id: 1, 
    title: "Building Your First Web Page", 
    description: "Create a basic web page with a title and a welcome message.", 
    example: `<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Welcome to My Web Page!</h1>\n  <p>This is my first page using HTML!</p>\n</body>\n</html>`,
    result: `<h1>Welcome to My Web Page!</h1><p>This is my first page using HTML!</p>`
  },
  { 
    id: 2, 
    title: "Fun with Colors and Text", 
    description: "Learn how to add colors and styles to your text.", 
    example: `<p style="color:blue;">This text is blue!</p>\n<p style="color:green; font-size:20px;">This text is green and bigger!</p>`,
    result: `<p style="color:blue;">This text is blue!</p><p style="color:green; font-size:20px;">This text is green and bigger!</p>`
  },
  { 
    id: 3, 
    title: "Making Your Page Interactive", 
    description: "Add a button that changes the text when clicked.", 
    example: `<button onclick="document.getElementById('demo').innerHTML = 'You clicked the button!'">Click Me!</button>\n<p id="demo"></p>`,
    result: `<button onclick="document.getElementById('demo').innerHTML = 'You clicked the button!'">Click Me!</button><p id="demo"></p>`
  },
  { 
    id: 4, 
    title: "Creating Fun Lists", 
    description: "Make fun lists with images and special items.", 
    example: `<ul>\n  <li><img src="https://via.placeholder.com/30" alt="Item 1"> Item 1</li>\n  <li><img src="https://via.placeholder.com/30" alt="Item 2"> Item 2</li>\n  <li><img src="https://via.placeholder.com/30" alt="Item 3"> Item 3</li>\n</ul>`,
    result: `<ul><li><img src="https://via.placeholder.com/30" alt="Item 1"> Item 1</li><li><img src="https://via.placeholder.com/30" alt="Item 2"> Item 2</li><li><img src="https://via.placeholder.com/30" alt="Item 3"> Item 3</li></ul>`
  },
  { 
    id: 5, 
    title: "Creating Simple Navigation", 
    description: "Add a menu to navigate between different pages.", 
    example: `<nav>\n  <ul>\n    <li><a href="#home">Home</a></li>\n    <li><a href="#about">About</a></li>\n    <li><a href="#contact">Contact</a></li>\n  </ul>\n</nav>`,
    result: `<nav><ul><li><a href="#home">Home</a></li><li><a href="#about">About</a></li><li><a href="#contact">Contact</a></li></ul></nav>`
  },
  { 
    id: 6, 
    title: "Embedding Videos", 
    description: "Learn how to embed videos into your web page.", 
    example: `<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    result: `<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  }
];

const IntermediateHTML = () => {
  const [selectedLesson, setSelectedLesson] = useState(lessons[0]);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for animations
  }, []);

  return (
    <section className="intermediate-html-course">
      {/* Sidebar Navigation */}
      <nav className="sidebar-nav">
        <img src={htmlIcon} alt="HTML Icon" className="html-icon" />
        <h1 className="course-title">Intermediate HTML Course</h1>
        <ul className="lesson-list">
          {lessons.map((lesson) => (
            <li key={lesson.id}>
              <button 
                onClick={() => setSelectedLesson(lesson)} 
                className="lesson-button"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="500"
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
      </div>
      <Link to='/HTMLBuilderGame' className="game-button">Navigate to Game</Link>
    </section>
  );
};

export default IntermediateHTML;
