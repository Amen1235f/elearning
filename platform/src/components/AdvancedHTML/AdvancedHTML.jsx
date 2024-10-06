import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import htmlAdvancedIcon from '../../assests/images/icons8-html5-64.png'; // Icon for HTML Advanced
import './AdvancedHTML.css'; // Import styles for this section
import { Link } from 'react-router-dom';

const advancedLessons = [
  { 
    id: 1, 
    title: "Understanding Semantic Elements", 
    description: "Learn about the importance of semantic elements like <article>, <section>, <header>, and <footer>.", 
    example: `<article>\n  <header><h2>Advanced HTML</h2></header>\n  <p>Understanding the semantic structure of HTML for SEO and accessibility.</p>\n  <footer>Written by WebExpert</footer>\n</article>`,
    result: `<article><header><h2>Advanced HTML</h2></header><p>Understanding the semantic structure of HTML for SEO and accessibility.</p><footer>Written by WebExpert</footer></article>`
  },
  { 
    id: 2, 
    title: "Forms and Input Validation", 
    description: "Build dynamic forms with built-in HTML validation features.",
    example: `<form>\n  <label for="email">Email:</label>\n  <input type="email" id="email" required>\n  <input type="submit" value="Submit">\n</form>`,
    result: `<form><label for="email">Email:</label><input type="email" id="email" required><input type="submit" value="Submit"></form>`
  },
  { 
    id: 3, 
    title: "Embedding SVG Graphics", 
    description: "Add and manipulate Scalable Vector Graphics (SVG) directly in HTML.",
    example: `<svg width="100" height="100">\n  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />\n</svg>`,
    result: `<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>`
  },
  { 
    id: 4, 
    title: "HTML Data Attributes", 
    description: "Use data attributes to store extra information on HTML elements.",
    example: `<div data-user-id="123" data-role="admin">User Info</div>\n<script>\n  const userInfo = document.querySelector('[data-user-id]');\n  console.log(userInfo.dataset.userId); // Outputs: 123\n</script>`,
    result: `<div data-user-id="123" data-role="admin">User Info</div><script>const userInfo = document.querySelector('[data-user-id]');console.log(userInfo.dataset.userId);</script>`
  },
  { 
    id: 5, 
    title: "Optimizing for SEO", 
    description: "Tips on structuring HTML for better search engine optimization.",
    example: `<meta name="description" content="Learn advanced HTML techniques to improve SEO rankings.">\n<h1>Advanced HTML SEO Guide</h1>\n<p>Discover the best practices for writing HTML that ranks well on search engines.</p>`,
    result: `<meta name="description" content="Learn advanced HTML techniques to improve SEO rankings."><h1>Advanced HTML SEO Guide</h1><p>Discover the best practices for writing HTML that ranks well on search engines.</p>`
  }
];

const AdvancedHTML = () => {
  const [selectedLesson, setSelectedLesson] = useState(advancedLessons[0]);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for animations
  }, []);

  return (
    <section className="advanced-html-course">
      {/* Sidebar Navigation */}
      <nav className="sidebar-nav">
        <img src={htmlAdvancedIcon} alt="Advanced HTML Icon" className="html-icon" />
        <h1 className="course-title">Advanced HTML Course</h1>
        <ul className="lesson-list">
          {advancedLessons.map((lesson) => (
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
      <Link to='/BuildPortfolio' className="game-button">Navigate to Game</Link>
    </section>
  );
};

export default AdvancedHTML;
