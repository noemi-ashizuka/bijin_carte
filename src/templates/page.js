import React from 'react';
import Layout from '../components/layout';
import ReactHtmlParser from 'react-html-parser';
import { Helmet } from "react-helmet";
import '../styles/pagetemplate.scss';

// function openQuestion() {
//   let answers = document.querySelectorAll('.answer-paragraph');
//   let questions = document.querySelectorAll('.question-trigger')
//     questions.forEach(question => 
//       question.addEventListener('click', (event) => {
//         // answers.forEach(answer => {
//         //   answer.classList.toggle('answer-hidden')
//         console.log(event.target)
//         })
//       )
    

  
  
// }

export default ({pageContext}) => (
  <Layout>
    <Helmet>
      { ReactHtmlParser(pageContext.yoast_head)}
    </Helmet>
    <div className="page-container">
    {pageContext.featured_media &&
      <div className="page-img-wrapper">
        <img src={pageContext.featured_media.source_url} alt={pageContext.featured_media.alt_text} />
      </div>
    }
    <div className="page-content">
      <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} className="page-title" />
      <div dangerouslySetInnerHTML={{__html: pageContext.content}} className="page-text" />
    </div>
  </div>
  </Layout>
);
