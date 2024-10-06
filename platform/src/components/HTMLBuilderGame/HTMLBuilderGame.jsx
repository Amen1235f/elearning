import React, { useState, useEffect } from 'react';
import './HTMLBuilderGame.css';

const questions = [
  { description: 'This element defines a navigation link.', answer: '<a>', options: ['<div>', '<a>', '<span>', '<img>'] },
  { description: 'This element defines a section in a document.', answer: '<section>', options: ['<section>', '<article>', '<header>', '<footer>'] },
  { description: 'This element defines a form.', answer: '<form>', options: ['<form>', '<input>', '<button>', '<textarea>'] },
  { description: 'This element is used to define a list item.', answer: '<li>', options: ['<ul>', '<ol>', '<li>', '<dl>'] },
];

const TIME_LIMIT = 10; // Time limit in seconds

const HTMLBuilderGame = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [message, setMessage] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (gameOver) return; // Stop timer when game is over

    if (timeLeft === 0) {
      handleNextQuestion();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameOver]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    if (option === currentQuestion.answer) {
      setMessage('Correct! Well done.');
      setScore((prevScore) => prevScore + 1);
    } else {
      setMessage('Incorrect. Try again.');
    }

    if (currentQuestionIndex === questions.length - 1) {
      setGameOver(true);
      setMessage(score > 2 ? 'Congratulations! You scored more than 2!' : 'Game over. Better luck next time!');
      return;
    }

    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    setTimeout(() => {
      setMessage('');
      setTimeLeft(TIME_LIMIT);
      setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    }, 1000);
  };

  return (
    <div className="html-builder-game">
      {gameOver ? (
        <div className="game-over">
          <h1>Game Over!</h1>
          <p>Your final score is: {score}</p>
          <p>{message}</p>
        </div>
      ) : (
        <>
          <h1>Guess the HTML Element</h1>
          <p>{currentQuestion.description}</p>
          <div className="options">
            {currentQuestion.options.map((option) => (
              <button key={option} onClick={() => handleOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
          <div className="feedback">
            <p>{message}</p>
          </div>
          <div className="score-timer">
            <p>Score: {score}</p>
            <p>Time Left: {timeLeft}s</p>
          </div>
        </>
      )}
    </div>
  );
};

export default HTMLBuilderGame;
