import React, { useState } from 'react';
import './CSSQuizGame.css';

const cssQuestions = [
  {
    id: 1,
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    id: 2,
    question: "How do you change the background color of an element?",
    options: [
      "color: red;",
      "background-color: red;",
      "bgcolor: red;",
      "background: red;"
    ],
    answer: "background-color: red;"
  },
  {
    id: 3,
    question: "Which property is used to change the text color of an element?",
    options: [
      "text-color",
      "color",
      "font-color",
      "style"
    ],
    answer: "color"
  },
  {
    id: 4,
    question: "Which CSS property controls the spacing between elements?",
    options: [
      "padding",
      "margin",
      "spacing",
      "border"
    ],
    answer: "margin"
  },
  // Add more questions as needed
];

const CSSQuizGame = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const currentQuestion = cssQuestions[currentQuestionIndex];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    // Move to the next question or show result if it's the last question
    if (currentQuestionIndex < cssQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Reset option selection
    } else {
      setShowResult(true); // Show final result
    }
  };

  const handleRestartGame = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

  return (
    <div className="quiz-container">
      <h1>CSS Beginner Quiz</h1>
      {showResult ? (
        <div className="result">
          <h2>Your final score: {score} / {cssQuestions.length}</h2>
          <button onClick={handleRestartGame}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>{currentQuestion.question}</h2>
          <ul className="options-list">
            {currentQuestion.options.map((option) => (
              <li key={option}>
                <button
                  className={`option-button ${selectedOption === option ? 'selected' : ''}`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleSubmitAnswer}
            disabled={!selectedOption}
            className="submit-button"
          >
            Submit Answer
          </button>
        </div>
      )}
    </div>
  );
};

export default CSSQuizGame;
