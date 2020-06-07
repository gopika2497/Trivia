import React from 'react';

import './App.css';
import  quizQuestions from './api/questionList';
import Quiz from './pages/quiz';
import Question from './components/question';
import Button from './components/nextButton';
import Result from './components/result';
import {Route,Link} from 'react-router-dom';



 class App extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      name: '',
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: '',
    };
  }
  componentDidMount() {
    const ans = quizQuestions.map(question => question.answers)
  
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: ans[0]
    });
  }

  setUserAnswer = (answer) => {
    
    this.setState({ answer: answer });   
 } 

    /*setNextQuestion() {
      const counter = this.state.counter + 1;
      console.log(counter);
      const questionId = this.state.questionId + 1;
      this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers
        
      });
    }*/
   

    setResults () {
      console.log("set result");
    this.setState({counter: this.state.counter + 1})
      
      console.log(this.state.name)
      
    }

  handleAnswerSelected = (event) => {
      this.setUserAnswer(event.currentTarget.value);
      console.log(event.currentTarget.value);
      
     }
     handleName = (event) => {
      this.setState({name : event.target.value});
      console.log(event.target.value);
      
     }
     handleNameButtonSelected = () => {
     
      const counter = this.state.counter + 1;
      this.setState({counter : counter});
      console.log(this.state.counter);
     
      
     }
  handleNextButtonSelected = () => {

   

  
      setTimeout(() => this.setResults(), 300);
    
  }
  renderQuiz() {
    return (
     
        <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        onNextButton={this.handleNextButtonSelected}
      />
      
     
      
    );
  }
 
  
  renderResult() {
    return ( 
      <div>
      <p><h1>Name: {this.state.name}</h1></p>
      <p>Who is the best cricketer in the world</p>
      <p>Answer: {this.state.answer}</p>
      
    </div>
      );
  
  }

  renderUser() {
    return (
      <div className="quiz">
       
          What is Your Name ?
          <form>
              <input type="text" onChange={(e) => this.handleName(e)} />
          </form>
           
          
          <Button  onNextButton={this.handleNameButtonSelected} /> 
        </div>
        
      
         
        );
      

    
  
  }
  render() {
    return (
      <div className="App">
        <div className='container'>
        <header className="App-header">
         
          { console.log(this.state.counter)}
           {this.state.counter == 0 ?
            this.renderUser()
          
          
           : this.state.counter == 1? this.renderQuiz() : this.renderResult() }
       
          
        </header>
        </div>
        
      </div>
    );
  }
  
}

export default App;

