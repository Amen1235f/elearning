import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './LessonNavigation.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Initialize AOS
AOS.init();

// Example user progress (should be dynamically fetched or calculated)
const userProgress = {
  html: { beginner: 40, intermediate: 60, advanced: 20 },
  css: { beginner: 50, intermediate: 70, advanced: 30 },
  js: { beginner: 30, intermediate: 50, advanced: 40 },
};

// Icons for kids
const icons = {
  html: 'https://img.icons8.com/ios/50/000000/html-5.png',
  css: 'https://img.icons8.com/ios/50/000000/css3.png',
  js: 'https://img.icons8.com/ios/50/000000/javascript.png',
};

const levels = ['beginner', 'intermediate', 'advanced'];

const LessonNavigation = () => {
  const getProgress = (topicId, level) => userProgress[topicId][level] || 0;

  return (
    <div className="lesson-nav-container">
      {['html', 'css', 'js'].map((topic) => (
        <div key={topic} className="topic-section" data-aos="fade-up">
          <div className="topic-header">
            <img src={icons[topic]} alt={`${topic} icon`} className="topic-icon" />
            <h2 className="topic-title">{topic.toUpperCase()}</h2>
          </div>
          <div className="levels-container">
            {levels.map((level) => (
              <div key={level} className="level-card" data-aos="fade-up">
                <h3 className="level-title">
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </h3>
                <div className="progress-circle-container">
                  <div
                    className="progress-circle"
                    style={{ background: `conic-gradient(#4caf50 ${getProgress(topic, level)}%, #e0e0e0 ${getProgress(topic, level)}%)` }}
                  >
                    <span className="progress-text">{getProgress(topic, level)}%</span>
                  </div>
                </div>
                <p className="level-description">
                  Explore {topic} at the {level} level. Enjoy the learning journey!
                </p>
                {topic === 'html' && level === 'beginner' && (
                  <Link to="/beginner-html-course">
                    <button className="navigate-button">Start Beginner HTML Course</button>
                  </Link>
                )}
                {topic === 'html' && level === 'intermediate' && (
                  <Link to="/intermediate-html-course">
                    <button className="navigate-button">Start Beginner HTML Course</button>
                  </Link>
                )}
                  {topic === 'html' && level === 'advanced' && (
                  <Link to="/AdvancedHTML">
                    <button className="navigate-button">Start Beginner HTML Course</button>
                  </Link>
                )}
                 {topic === 'css' && level === 'beginner' && (
                  <Link to="/BeginnerCSSCourse">
                    <button className="navigate-button">Start Beginner CSS Course</button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LessonNavigation;
