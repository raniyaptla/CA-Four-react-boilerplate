
import React, { useState , useRef } from 'react';

const QuestionOptions = ({ options, onOptionClick }) => {
  const [selectedOption, setSelectedOption] = useState(null);
 

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onOptionClick(option);
  };

  return (
    <div className="question-options">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => handleOptionClick(option)}
          className={selectedOption === option ? 'selected' : ''}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

const QuestionBox = ({ question, onOptionClick, currentQuestionIndex, totalQuestions  }) => {
  const ref =useRef();

  const handleHighlight = () => {
    ref.current.style.color="red";
  };

  const handleRemoveHighlight = () => {
    ref.current.style.color="blue";
  };

  return (
    <div className="question-box">

      <div className="question-header" style={{ color: 'white' }}>
        <p>Question {currentQuestionIndex + 1} of {totalQuestions}</p>
      </div>
      <h2  ref={ref}>{question.text}</h2>
      <QuestionOptions options={question.options} onOptionClick={onOptionClick} />
      <div className="highlight-buttons">
        <button onClick={handleHighlight}>Highlight</button>
        <button onClick={handleRemoveHighlight}>Remove Highlight</button>
      </div>

      

    </div>
  );
};


export default QuestionBox;
