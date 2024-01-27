
import React from 'react';

const Result = ({ score, totalQuestions, onRestart }) => {
  const percentageScore = (score / totalQuestions) * 100;

  return (
    <div className="result-container">
      <h2>Result</h2>
      <p>Score: {score}</p>
      <p>Percentage Score: {percentageScore}%</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default Result;
