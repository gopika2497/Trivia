import React from 'react';
import Question from '../components/question';
import QuestionCount from '../components/questionCount';
import AnswerOption from '../components/answerOptions';
import Button from '../components/nextButton';

const Quiz = props => {

    const renderAnswerOptions = (key) => {
        return (
          
          <AnswerOption
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={props.answer}
            questionId={props.questionId}
            onAnswerSelected={props.onAnswerSelected}
          />
          
             
         
          
        );
      }
      
    return (
        <div className="quiz">
          <QuestionCount
            counter={props.questionId}
            total={props.questionTotal}
          />
          <Question content={props.question} />
          <ul className="answerOptions">
            {props.answerOptions.map(renderAnswerOptions)}
          </ul>
          <Button  onNextButton={props.onNextButton} /> 
        </div>
        
      
         
        );
    
        
  
    
    
    
  }

 export default Quiz; 