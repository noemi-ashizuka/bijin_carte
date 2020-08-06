import React from 'react';
import MultipleQuizQuestions from '../data/multipleQuizQuestions';
import QuestionBox from '../components/QuestionBox';

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

  computeAnswer = (type) => {
    if(type === "A") {
      this.setState({
        typeA: this.state.typeA + 1
      })
    } else if (type === "B") {
      this.setState({
        typeB: this.state.typeB + 1
      })
    } else if (type ==="C") {
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

    console.log(this.state);
  }

  componentDidMount() {
    this.getQuestions();
  }

  render() {
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
                  selected={type => this.computeAnswer(type)}
                />
            )}
      </div>
    )
  }
}

export default quizApp;