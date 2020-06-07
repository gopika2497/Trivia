import React from 'react';

const AnswerOptions = props => {
    return(
      <div className="row">
        <div className="col-lg-6">
        <li >
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.answerType}>
        {props.answerContent}
      </label>
        </li>
        </div>
       
      </div>
       
    )
    ;
}

export default AnswerOptions;
