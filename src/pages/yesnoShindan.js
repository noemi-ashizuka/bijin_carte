import React from 'react';
import YesNo from '../data/yesnoData';

class YesNoShindan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 0,
      questionCount: 0,
      currentAnswers: []
    }
  }

  getQuestions = () => {
    YesNo().then(question => {
      this.setState({
        questions: question,
      });
    })
  };

  getCurrentQuestion = () => {
    YesNo().then(question => {
      console.log(question[0])
      console.log(question[0].answers)
      this.setState({
        currentQuestion: question[0].question,
        currentAnswers: question[0].answers
      })
    })
  }

  onClick = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }

  updateQuestion = (nextId) => {
    console.log(nextId)
    // YesNo().then(question => {
      
    // //   this.setState({
    // //     currentQuestion: question[nextId].question,
    // //     currentAnswers: question[nextId].answers
    // //   })
    // // })
  }

  componentDidMount() {
    //this.getQuestions();
    this.getCurrentQuestion();
  }

  render() {
    return (
      <div>
        <div>{this.state.currentQuestion}</div>
        <div>
          {this.state.currentAnswers.map(answer => 
            <button key={answer.answerId} onClick={this.onClick} value={answer.nextId}>{answer.content}</button>
          )}
        </div>
      </div>
    )
  }
}

export default YesNoShindan;