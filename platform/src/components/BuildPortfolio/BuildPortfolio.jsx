import React, { useState, useEffect } from 'react';
import './BuildPortfolio.css';

const predefinedPortfolio = `
  <header>
    <h1>Your Name</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  <section id="about">
    <h2>About Me</h2>
    <p>A brief description about yourself.</p>
  </section>
  <section id="portfolio">
    <h2>My Portfolio</h2>
    <img src="https://via.placeholder.com/150" alt="Project Image">
  </section>
  <section id="contact">
    <h2>Contact Me</h2>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email">
      <textarea placeholder="Your message"></textarea>
      <input type="submit" value="Send">
    </form>
  </section>
`;

const BuildPortfolio = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [showWarning, setShowWarning] = useState(true);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const sanitizedCode = htmlCode.replace(/\s/g, ''); // Remove spaces
    const sanitizedPredefined = predefinedPortfolio.replace(/\s/g, '');
    if (sanitizedCode === sanitizedPredefined) {
      setIsSuccessful(true);
    } else {
      setIsSuccessful(false);
    }
  }, [htmlCode]);

  const calculateScore = () => {
    let score = 0;
    if (htmlCode.includes('<header>')) score += 20;
    if (htmlCode.includes('<section id="about">')) score += 20;
    if (htmlCode.includes('<section id="portfolio">')) score += 20;
    if (htmlCode.includes('<section id="contact">')) score += 20;
    if (htmlCode.includes('<form>')) score += 20;
    return score;
  };

  const handleSubmit = () => {
    const score = calculateScore();
    setScore(score);
    if (score === 100) {
      setIsSuccessful(true);
      setFeedback('Great job! Your portfolio is complete.');
    } else {
      setIsSuccessful(false);
      setFeedback(`Your code is partially correct. Score: ${score}`);
    }
  };

  return (
    <div className="build-portfolio-game">
      {showWarning && (
        <div className="warning-card">
          <h2>Build Your Personal Portfolio!</h2>
          <p>Use HTML to create a simple portfolio. Include a header, navigation links, an about section, a portfolio section, and a contact form.</p>
          <button onClick={() => setShowWarning(false)}>Start Game</button>
        </div>
      )}

      {!showWarning && (
        <div className="game-container">
          <div className="code-editor">
            <h3>Code Editor</h3>
            <textarea
              value={htmlCode}
              onChange={(e) => setHtmlCode(e.target.value)}
              placeholder="Write your HTML code here..."
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>

          <div className="live-preview">
            <h3>Live Preview</h3>
            <div
              className="preview-content"
              dangerouslySetInnerHTML={{ __html: htmlCode }}
            />
          </div>
        </div>
      )}

      {isSuccessful && (
        <div className="success-message">
          <h2>Congratulations! Your portfolio is complete!</h2>
          <p>Your score: {score}</p>
        </div>
      )}

      {!isSuccessful && feedback && (
        <div className="feedback-message">
          <p>{feedback}</p>
        </div>
      )}

      {!isSuccessful && !showWarning && (
        <div className="hint">
          <h3>Hint: Make sure your portfolio includes:</h3>
          <ul>
            <li>A header with your name and navigation links</li>
            <li>An about section with a description</li>
            <li>A portfolio section with an image</li>
            <li>A contact section with a form</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BuildPortfolio;
