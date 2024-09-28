// src/components/QuizPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const { quizId } = useParams();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
  const quiz = quizzes[quizId];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (!quiz) {
      navigate('/'); // Replace history.push with navigate
    }
  }, [quiz, navigate]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Save answers to localStorage and go to summary
      localStorage.setItem(`quiz_${quizId}_answers`, JSON.stringify(answers));
      navigate(`/score/${quizId}`); // Replace history.push with navigate
    }
  };

  if (!quiz) return null;

  const question = quiz.questions[currentQuestionIndex];

  return (
    <div>
      <h2>{quiz.title}</h2>
      <div>
        <h4>{question.questionText}</h4>
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;
