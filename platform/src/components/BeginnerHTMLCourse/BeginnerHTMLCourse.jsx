import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import htmlIcon from '../../assests/images/icons8-html5-64.png'; // Kid-friendly icon for HTML
import './BeginnerHTML.css'; // Import styles for this section
import { Link } from 'react-router-dom';
const lessons = [
  { 
    id: 1, 
    title: "Introduction to HTML", 
    description: "What is HTML? Learn about the language that powers the web.", 
    example: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Introduction</title>\n</head>\n<body>\n  <h1>Welcome to HTML!</h1>\n</body>\n</html>`,
    result: `<h1>Welcome to HTML!</h1>`
  },
  { 
    id: 2, 
    title: "Basic Tags", 
    description: "Explore the fundamental tags like headings, paragraphs, links, and images.", 
    example: `<h1>Hello World</h1>\n<p>This is a paragraph.</p>\n<a href="#">This is a link</a>`,
    result: `<h1>Hello World</h1><p>This is a paragraph.</p><a href="#">This is a link</a>`
  },
  { 
    id: 3, 
    title: "Lists and Tables", 
    description: "Learn how to create lists and tables in HTML.", 
    example: `<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n</ul>\n\n<table>\n  <tr>\n    <th>Header 1</th>\n    <th>Header 2</th>\n  </tr>\n  <tr>\n    <td>Data 1</td>\n    <td>Data 2</td>\n  </tr>\n</table>`,
    result: `<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><table><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Data 1</td><td>Data 2</td></tr></table>`
  },
  { 
    id: 4, 
    title: "Forms and Inputs", 
    description: "Discover how to create forms and various input types.", 
    example: `<form>\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name">\n  <br>\n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email">\n  <br>\n  <input type="submit" value="Submit">\n</form>`,
    result: `<form><label for="name">Name:</label><input type="text" id="name" name="name"><br><label for="email">Email:</label><input type="email" id="email" name="email"><br><input type="submit" value="Submit"></form>`
  },
  { 
    id: 5, 
    title: "Images and Links", 
    description: "Learn how to insert images and create hyperlinks.", 
    example: `<img src="https://via.placeholder.com/150" alt="Placeholder Image">\n<a href="https://www.example.com">Visit Example</a>`,
    result: `<img src="https://via.placeholder.com/150" alt="Placeholder Image"><a href="https://www.example.com">Visit Example</a>`
  },
  { 
    id: 6, 
    title: "HTML Semantics", 
    description: "Understand semantic HTML elements and their importance.", 
    example: `<header>\n  <h1>My Website</h1>\n</header>\n<main>\n  <section>\n    <h2>About Us</h2>\n    <p>We are a company that values...</p>\n  </section>\n  <footer>\n    <p>Contact us at contact@example.com</p>\n  </footer>\n</main>`,
    result: `<header><h1>My Website</h1></header><main><section><h2>About Us</h2><p>We are a company that values...</p></section><footer><p>Contact us at contact@example.com</p></footer></main>`
  }
];

const BeginnerHTMLCourse = () => {
  const [selectedLesson, setSelectedLesson] = useState(lessons[0]);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for animations
  }, []);

  return (
    <section className="beginner-html-course">
      {/* Sidebar Navigation */}
      <nav className="sidebar-nav">
        <img src={htmlIcon} alt="HTML Icon" className="html-icon" />
        <h1 className="course-title">Beginner HTML Course</h1>
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
      <Link to='/BuildHTMLHouse' className="game-button">navigate to game</Link>
    </section>
  );
};

export default BeginnerHTMLCourse;
