import React from 'react';
// import multipleQuestionsResults from '../data/multipleQuestionsResults';

const ResultChart = ({resultData}) => (
  <div>
    <div>
      <h1>{resultData[0].title}</h1>
      <p>{resultData[0].firstBox}</p>
    </div>
    <div>
      <h1>Your Keywords</h1>
      <p>{resultData[0].keywords}</p>
    </div>
    <div>
      
    </div>
  </div>
)

export default ResultChart;