// src/components/ScoreSummary.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ScoreSummary = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
  const quiz = quizzes[quizId];
  const answers = JSON.parse(localStorage.getItem(`quiz_${quizId}_answers`)) || [];

  if (!quiz) {
    navigate('/');
    return null;
  }

  const score = answers.filter((answer, index) => answer === quiz.questions[index].correctAnswer).length;

  return (
    <div>
      <h2>Your Score: {score}/{quiz.questions.length}</h2>
      <h3>Correct Answers:</h3>
      <ul>
        {quiz.questions.map((question, index) => (
          <li key={index}>
            {question.questionText} - <strong>{question.correctAnswer}</strong>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/')}>Back to Quiz List</button>
    </div>
  );
};

export default ScoreSummary;
