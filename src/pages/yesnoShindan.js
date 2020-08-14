import React from 'react';
import YesNo from '../data/yesnoData';
import '../styles/yesnoshindan.scss';

class YesNoShindan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 0,
      currentImg: 0,
      currentAnswers: []
    }
  }

  getInitialQuestion = () => {
    YesNo().then(question => {
      this.setState({
        currentQuestion: question[0].question,
        currentImg: question[0].imgUrl,
        currentAnswers: question[0].answers
      })
    })
  }

  updateQuestion = (nextId) => {
    YesNo().then(question => {
      this.setState({
        currentQuestion: question[nextId - 1].question,
        currentAnswers: question[nextId - 1].answers,
        currentImg: question[nextId - 1].imgUrl
      })
    })
  }

  componentDidMount() {
    this.getInitialQuestion();
  }

  render() {
    return (
      <div className="question-box">
        {this.state.currentImg &&
          <div className="question-img-container">
            <img src={this.state.currentImg} alt="make up and skincare" className="shindan-image" />
          </div>
        }
        <div className="question-text-container">
          <h2 className="question-text">{this.state.currentQuestion}</h2>
          {this.state.currentAnswers &&
            <div className="answers-box">
              {this.state.currentAnswers.map(answer => 
                <button key={answer.answerId} onClick={e => this.updateQuestion(e.target.value)} value={answer.nextId} className="answer-button">{answer.content}</button>
              )}
            </div>
          }
        </div>
      </div>
    )
  }
}

export default YesNoShindan;
