import React, { useState, useEffect } from 'react';
import './BuildHTMLHouse.css';

const predefinedHouse = `
  <div class="house">
    <h1>Welcome to My House</h1>
    <p>This is a simple house structure built with HTML!</p>
    <div class="windows">
      <div class="window"></div>
      <div class="window"></div>
    </div>
    <div class="door"></div>
  </div>
`;

const BuildHTMLHouse = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [showWarning, setShowWarning] = useState(true);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');

  // Handle real-time code change and check result
  useEffect(() => {
    const sanitizedCode = htmlCode.replace(/\s/g, ''); // Remove whitespace for comparison
    const sanitizedPredefinedHouse = predefinedHouse.replace(/\s/g, '');
    if (sanitizedCode === sanitizedPredefinedHouse) {
      setIsSuccessful(true);
    } else {
      setIsSuccessful(false);
    }
  }, [htmlCode]);

  // Calculate score based on similarity
  const calculateScore = () => {
    let score = 0;
    if (htmlCode.includes('<h1>Welcome to My House</h1>')) score += 25;
    if (htmlCode.includes('<p>This is a simple house structure built with HTML!</p>')) score += 25;
    if (htmlCode.includes('<div class="windows"><div class="window"></div><div class="window"></div></div>')) score += 25;
    if (htmlCode.includes('<div class="door"></div>')) score += 25;
    return score;
  };

  // Handle code submission
  const handleSubmit = () => {
    const score = calculateScore();
    setScore(score);
    if (score === 100) {
      setIsSuccessful(true);
      setFeedback('Correct! Well done.');
    } else {
      setIsSuccessful(false);
      setFeedback(`Your code is partially correct. Score: ${score}`);
    }
  };

  return (
    <div className="build-html-house-game">
      {/* Warning Card */}
      {showWarning && (
        <div className="warning-card">
          <h2>Build Your HTML House!</h2>
          <p>Welcome to the "Build Your HTML House" game! Your task is to write HTML code to create a house. The house should include a title, description, windows, and a door. Make sure your HTML matches the predefined house structure!</p>
          <button onClick={() => setShowWarning(false)}>Start Game</button>
        </div>
      )}

      {!showWarning && (
        <div className="game-container">
          {/* Code Editor on the Left */}
          <div className="code-editor">
            <h3>Code Editor</h3>
            <textarea
              value={htmlCode}
              onChange={(e) => setHtmlCode(e.target.value)}
              placeholder="Write your HTML code here..."
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>

          {/* Live Preview on the Right */}
          <div className="live-preview">
            <h3>Live Preview</h3>
            <div
              className="preview-content"
              dangerouslySetInnerHTML={{ __html: htmlCode }}
            />
          </div>
        </div>
      )}

      {/* Feedback for Success */}
      {isSuccessful && (
        <div className="success-message">
          <h2>Congratulations! You successfully built your house!</h2>
          <p>Your score: {score}</p>
        </div>
      )}

      {/* Feedback for Submission */}
      {!isSuccessful && !showWarning && feedback && (
        <div className="feedback-message">
          <p>{feedback}</p>
        </div>
      )}

      {/* Hints for Missing Elements */}
      {!isSuccessful && !showWarning && (
        <div className="hint">
          <h3>Hint: Make sure your house has the following:</h3>
          <ul>
            <li>A title (<code>&lt;h1&gt;Welcome to My House&lt;/h1&gt;</code>)</li>
            <li>A paragraph (<code>&lt;p&gt;This is a simple house structure built with HTML!&lt;/p&gt;</code>)</li>
            <li>Two windows (<code>&lt;div class="windows"&gt;&lt;div class="window"&gt;&lt;/div&gt;&lt;div class="window"&gt;&lt;/div&gt;&lt;/div&gt;</code>)</li>
            <li>A door (<code>&lt;div class="door"&gt;&lt;/div&gt;</code>)</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BuildHTMLHouse;
