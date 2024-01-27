import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import Switch from 'react-switch';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const backgroundColor = isDarkMode ? 'black' : 'lightblue';
  const textColor = isDarkMode ? 'white' : 'black';
  const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode';

  

  const currentQuestion = questions[currentQuestionIndex];

  
  const handleOptionClick = (option) => {
    if (option.isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex + 1 === questions.length) {
      setQuizComplete(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  useEffect(() => {
    if (quizComplete) {
      alert("Congratulations! You have completed the quiz!");
    }
  }, [quizComplete]);
  

  return (
    
    <div className="container" style={{ backgroundColor, color: textColor }}>
      
      <h1  style={{color: textColor }}>Kalvium</h1>

      <div className="toggle-container">
        <Switch
          onChange={toggleMode}
          checked={isDarkMode}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          height={20}
          width={48}
        />
        <span style={{ marginLeft: '10px' }}>{buttonText}</span>
      </div>

      <div className="question-container">
        {quizComplete ? (
          <Result score={score} totalQuestions={questions.length} onRestart={() => {
            setCurrentQuestionIndex(0);
            setScore(0);
            setQuizComplete(false);
          }} />
        ) : (
          <QuestionBox
            question={currentQuestion}
            onOptionClick={handleOptionClick}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
          />
        )}
      </div>
      
      <div className="score-container">
        <p>Score: {score}</p>
      </div>

    </div>
  
    
  );
};

export default App;


