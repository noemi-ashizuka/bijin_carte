import React, { useState } from 'react';
// import Button from './Button';

// hooks for use state: double disables button after click, answer makes other choices disappear
const QuestionBox = ({ question, answers, selected, imageUrl, subLine }) => {
  const[answer, setAnswer] = useState(answers);
  const [double, setDouble] = useState(false);
  return (
    <div className="question-wrapper">
      <img src={imageUrl} alt="make up" className="question-image" />
    <div className="text-wrapper">
      <div className="question-container">{question}</div>
      {subLine && 
        <p className="question-subline">{subLine}</p>
      }
        
        <div className="answers-container">
          {answer.map( option => (
            <button 
              key={option.answerId}
              disabled={double}
              onClick={() => {
                setAnswer([option]);
                selected(option.type);
                setDouble(true);
              }} className="answer-option">
              {option.content}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuestionBox;