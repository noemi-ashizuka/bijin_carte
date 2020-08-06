import React, { useState } from 'react';

// hooks for use state: double disables button after click, answer makes other choices disappear
const QuestionBox = ({ question, answers, selected }) => {
  const[answer, setAnswer] = useState(answers);
  const [double, setDouble] = useState(false);
  return (
    <div>{question}
    {answer.map( option => (
      <button 
        key={option.answerId}
        disabled={double}
        onClick={() => {
          setAnswer([option]);
          selected(option.type);
          setDouble(true);
        }}>
        {option.content}
      </button>
    ))}
    </div>
  )
}

export default QuestionBox;