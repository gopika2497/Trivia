import React from 'react';


const Result = (props) => {
  return (
    <div className="result">
      <h1><strong>{props.quizResult}!</strong> </h1>
      <h4>Score {props.mark} points</h4>
    </div>
  );
}


export default Result;