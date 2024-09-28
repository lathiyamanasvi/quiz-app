// src/components/QuizList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const QuizList = () => {
  const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];

  return (
    <div>
      <h1>Available Quizzes</h1>
      <ul>
        {quizzes.map((quiz, index) => (
          <li key={index}>
            <h3>{quiz.title}</h3>
            <p>{quiz.description}</p>
            <Link to={`/quiz/${index}`}>Start Quiz</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
