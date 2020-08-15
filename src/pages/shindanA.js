import React from 'react';
import Layout from '../components/layout';
import MultipleQuizQuestions from '../data/multipleQuizQuestions';
import QuestionBox from '../components/QuestionBox';
import Result from '../components/Result';
import '../styles/shindana.scss';

class ShindanA extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      questions: [],
      subLine: 0,
      questionCount: 0,
      userAnswers: []
    }
  };

  getQuestions = () => {
    MultipleQuizQuestions().then(question => {
      this.setState({
        questions: question,
        subLine: question.subLine || 0
      });
    })
  };

  computeAnswer = (answer) => {
    this.setState({
      userAnswers: [...this.state.userAnswers, answer]
    });

    this.setState({
      questionCount: this.state.questionCount < 9 ? this.state.questionCount + 1 : 3
    })
  }

  checkResultType = () => {
    const count = this.state.userAnswers.reduce((tally, answer) => {
      tally[answer] = (tally[answer] || 0) + 1;
      console.log(tally)
      return tally;
    }, {});

    // get the max value and return its key
    return Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
  }

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <Layout>
        <div className="quiz-container">
          <h1 className="quiz-title">Personal Color</h1>
          {this.state.questions.length > 0 &&
            this.state.questionCount < 9 &&
              this.state.questions.map(
                ({question, answers, id, img_url, subLine}) => 
                  <QuestionBox 
                    question={question}
                    answers={answers}
                    imageUrl={img_url}
                    subLine={subLine}
                    key={id}
                    selected={answer => this.computeAnswer(answer)}
                  />
              )}
              {this.state.questionCount === 9 ? (<Result resultType={this.checkResultType()} />) : null }
        </div>
      </Layout>
    )
  }
}

export default ShindanA;