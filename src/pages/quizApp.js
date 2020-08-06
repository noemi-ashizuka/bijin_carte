import React from 'react';
import MultipleQuizQuestions from '../data/multipleQuizQuestions';
import QuestionBox from '../components/QuestionBox';
import Result from '../components/Result';

class quizApp extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      questions: [],
      questionCount: 0,
      typeA: 0,
      typeB: 0,
      typeC: 0,
      typeD: 0
    }
  };

  getQuestions = () => {
    MultipleQuizQuestions().then(question => {
      console.log(question)
      this.setState({
        questions: question
      });
      console.log(this.state)
    })
  };

  computeAnswer = (answer) => {
    if(answer === "A") {
      this.setState({
        typeA: this.state.typeA + 1
      })
    } else if (answer === "B") {
      this.setState({
        typeB: this.state.typeB + 1
      })
    } else if (answer ==="C") {
      this.setState({
        typeC: this.state.typeC + 1
      })
    } else {
      this.setState({
        typeC: this.state.typeC + 1
      })
    }
    this.setState({
      questionCount: this.state.questionCount < 3 ? this.state.questionCount + 1 : 3
    })
  }

  checkResultType = () => {
    const max = Math.max(this.state.typeA, this.state.typeB, this.state.typeC, this.state.typeD);
    
  }

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.questions.length > 0 &&
          this.state.questionCount < 3 &&
            this.state.questions.map(
              ({question, answers, type, id}) => 
                <QuestionBox 
                  question={question}
                  answers={answers}
                  key={id}
                  selected={answer => this.computeAnswer(answer)}
                />
            )}
            {this.state.questionCount === 3 ? (<Result resultType={this.checkResultType()} />) : null }
      </div>
    )
  }
}

export default quizApp;