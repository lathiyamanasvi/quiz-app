import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes, BrowserRouter } from 'react-router-dom';
import QuizList from './component/QuizList';
import QuizPage from './component/QuizPage';
import ScoreSummary from './component/ScoreSummary';
import { useEffect } from 'react';

const quizzes = [
  {
    title: "JavaScript Basics",
    description: "Test your knowledge of JavaScript fundamentals.",
    questions: [
      {
        questionText: "What is the output of 1 + '2' in JavaScript?",
        options: ["3", "12", "undefined", "error"],
        correctAnswer: "12",
      },
      {
        questionText: "Which company developed JavaScript?",
        options: ["Mozilla", "Netscape", "Microsoft", "Sun Microsystems"],
        correctAnswer: "Netscape",
      },
    ],
  },
  {
    title: "HTML & CSS",
    description: "Check your understanding of HTML and CSS.",
    questions: [
      {
        questionText: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "None of the above"],
        correctAnswer: "Hyper Text Markup Language",
      },
      {
        questionText: "Which property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "background"],
        correctAnswer: "background-color",
      },
    ],
  },
];


function App() {
  useEffect(() => {
    // Store quizzes data in local storage on component mount
    localStorage.setItem('quizzes', JSON.stringify(quizzes));
  }, []);
  return (
    
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<QuizList />} />
        <Route path="/quiz/:quizId" element={<QuizPage />} />
        <Route path="/score/:quizId" element={<ScoreSummary />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
