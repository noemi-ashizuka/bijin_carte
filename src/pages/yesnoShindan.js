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
      // console.log(question[0])
      // console.log(question[0].answers)
      this.setState({
        currentQuestion: question[0].question,
        currentAnswers: question[0].answers
      })
    })
   
  }

  // onClick = (e) => {
  //   e.preventDefault()
  //   //console.log(e.target.value)
  //   this.updateQuestion(e.target.value)
  // }

  handleClick = (target) => {
    console.log(target)
    YesNo().then(question => {
      console.log(question[target - 1]);
      this.updateQuestion(target)
    })
  }

  updateQuestion = (nextId) => {
    console.log(nextId)
    YesNo().then(question => {
      console.log(question[nextId - 1])
      this.setState({
        currentQuestion: question[nextId - 1].question,
        currentAnswers: question[nextId - 1].answers
      })
    })
    //console.log(this.state.currentAnswers)
    // console.log(this.state)
  }

  componentDidMount() {
    //this.getQuestions();
    this.getCurrentQuestion();
    //console.log(this.state.currentQuestion)
  }

  render() {
    return (
      <div>
        <div>{this.state.currentQuestion}</div>
        {this.state.currentAnswers &&
        <div>
          
          {this.state.currentAnswers.map(answer => 
            <button key={answer.answerId} onClick={e => this.handleClick(e.target.value)} value={answer.nextId}>{answer.content}</button>
          )}
  
        </div>
  }
      </div>
    )
  }
}

export default YesNoShindan;