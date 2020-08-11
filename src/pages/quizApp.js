import React from 'react';
import Layout from '../components/layout';
import MultipleQuizQuestions from '../data/multipleQuizQuestions';
import QuestionBox from '../components/QuestionBox';
import Result from '../components/Result';
import '../styles/quizapp.scss';

class quizApp extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      questions: [],
      questionCount: 0,
      userAnswers: []
    }
  };

  getQuestions = () => {
    MultipleQuizQuestions().then(question => {
      console.log(question)
      this.setState({
        questions: question
      });
    })
  };

  computeAnswer = (answer) => {
    this.setState({
      userAnswers: [...this.state.userAnswers, answer]
    });

    this.setState({
      questionCount: this.state.questionCount < 5 ? this.state.questionCount + 1 : 3
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
    console.log(this.state);
    return (
      <Layout>
        <div className="quiz-container">
          <h1 className="quiz-title">Test Title</h1>
          {this.state.questions.length > 0 &&
            this.state.questionCount < 5 &&
              this.state.questions.map(
                ({question, answers, id, img_url}) => 
                  <QuestionBox 
                    question={question}
                    answers={answers}
                    imageUrl={img_url}
                    key={id}
                    selected={answer => this.computeAnswer(answer)}
                  />
              )}
              {this.state.questionCount === 5 ? (<Result resultType={this.checkResultType()} />) : null }
        </div>
      </Layout>
    )
  }
}

export default quizApp;