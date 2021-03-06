import React from 'react';
import Layout from '../components/layout';
import MultipleQuizQuestions from '../data/multipleQuizQuestions';
import multipleQuestionsResults from '../data/multipleQuestionsResults';
import QuestionBox from '../components/QuestionBox';
import ResultChart from '../components/ResultChart';
import SEO from '../components/seo';
import '../styles/shindana.scss';

class ShindanA extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
      // console.log(tally)
      return tally;
    }, {});
    // get the max value and return its key
    return Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
  }

  getResult = (resultType) => {
    return multipleQuestionsResults.filter(data => data.resultType === resultType)
  }

  componentDidMount() {
    this.getQuestions();
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Layout>
        <SEO title="パーソナルカラー" />
        <div className="quiz-container">
          <h1 className="quiz-title">Personal Color</h1>
          {this.state.questions.length > 0 &&
            this.state.questionCount < 9 &&
            this.state.questions.map(
              ({ question, answers, id, img_url, subLine }) =>
                <QuestionBox
                  question={question}
                  answers={answers}
                  imageUrl={img_url}
                  subLine={subLine}
                  key={id}
                  selected={answer => this.computeAnswer(answer)}
                />
            )}
          {this.state.questionCount === 9 ? (<ResultChart resultData={this.getResult(this.checkResultType())} />) : null}
        </div>
      </Layout>
    )
  }
}

export default ShindanA;
