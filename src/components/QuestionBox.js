import React, { useState } from 'react';

const QuestionBox = ({ question, answers, selected }) => {
  const[answer] = useState(answers);
  return (
    <div>{question}
    {answers.map( option => (
      <div 
        key={option.answerId}
        onClick={() => {
          selected(option.type);
        }}>
        {option.content}
      </div>
    ))}
    </div>
  )
}

export default QuestionBox;