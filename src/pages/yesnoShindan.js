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

  getInitialQuestion = () => {
    YesNo().then(question => {
      this.setState({
        currentQuestion: question[0].question,
        currentAnswers: question[0].answers
      })
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
  }

  componentDidMount() {
    this.getInitialQuestion();
  }

  render() {
    return (
      <div>
        <div>{this.state.currentQuestion}</div>
        {this.state.currentAnswers &&
          <div>
            {this.state.currentAnswers.map(answer => 
              <button key={answer.answerId} onClick={e => this.updateQuestion(e.target.value)} value={answer.nextId}>{answer.content}</button>
            )}
          </div>
        }
      </div>
    )
  }
}

export default YesNoShindan;