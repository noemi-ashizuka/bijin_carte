import React from 'react';
import YesNo from '../data/yesnoData';
import {Fade} from 'react-reveal';
import Layout from '../components/layout';
import '../styles/shindanb.scss';

class ShindanB extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 0,
      currentImg: 0,
      questionCounter: 0,
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
        currentImg: question[nextId - 1].imgUrl,
        questionCounter: this.state.questionCounter + 1
      })
    })
  }

  componentDidMount() {
    this.getInitialQuestion();
  }

  render() {
    const styleOne = <> {this.state.currentImg &&
      <div className="question-img-container">
        <Fade right duration={1500}>
          <img src={this.state.currentImg} alt="make up and skincare" className="shindan-image" />
        </Fade>
      </div>
      } 
        <div className="question-text-container">
          <Fade left duration={1500}>
            <h2 className="question-text">{this.state.currentQuestion}</h2>
          </Fade>
        {this.state.currentAnswers &&
          <Fade bottom duration={1500}>
            <div className="answers-box">
              {this.state.currentAnswers.map(answer => 
                <button key={answer.answerId} onClick={e => this.updateQuestion(e.target.value)} value={answer.nextId} className="answer-button">{answer.content}</button>
              )}
            </div>
          </Fade>
        }
          
      </div> 
    </>
    const styleTwo = <> 
      <div className="question-text-container">
        <Fade right duration={1500}>
          <h2 className="question-text">{this.state.currentQuestion}</h2>
        </Fade>
        {this.state.currentAnswers &&
          <Fade top duration={1500}>
            <div className="answers-box">
              {this.state.currentAnswers.map(answer => 
                  <button key={answer.answerId} onClick={e => this.updateQuestion(e.target.value)} value={answer.nextId} className="answer-button">{answer.content}</button>
              )}
            </div>
          </Fade>
        }
      </div> 
      {this.state.currentImg &&
      <div className="question-img-container">
        <Fade left duration={1500}>
          <img src={this.state.currentImg} alt="make up and skincare" className="shindan-image" />
        </Fade>
      </div>
      } 
      </>

    return (
      <Layout>
        <div className="question-box">
          {this.state.questionCounter % 2 === 0 &&
            styleOne
          }
          
          {this.state.questionCounter % 2 !== 0 &&
            styleTwo
          }
        
        
          {/* {this.state.currentImg &&
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
          </div> */}
        </div>
      </Layout>
    )
  }
}

export default ShindanB;
