import React from 'react';
import Button from './Button';
import { faTwitterSquare, faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {
  FacebookShareButton,
  TwitterShareButton
} from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/result.scss';

const Result = ({resultType}) => (
  <div>
    {resultType === "A" &&
      <div className="quiz-result-container">
        <h1 className="quiz-result-title">A: イエベ春</h1>
        <div className="quiz-result-color-box">
          <img src="https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt="cherry blossoms" className="quiz-result-image" />
          <p className="quiz-result-text">黄みで明るくクリアな色</p>
        </div>
      </div>
    }
    {resultType === "B" &&
      <div className="quiz-result-container">
        <h1 className="quiz-result-title">B: イエベ秋</h1>
        <div className="quiz-result-color-box">
          <img src="https://images.unsplash.com/photo-1538580619159-6c19131e1062?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt="fall leaves" className="quiz-result-image" />
          <p className="quiz-result-text">黄みで暗くシックな色</p>
        </div>
        <FacebookShareButton
          url="http://google.com"
          children={<FontAwesomeIcon
            icon={faFacebookSquare}
            className="quiz-share-icon" 
            />}
          quote="B: イエベ秋"
          hashtag="findyourbeauty"
        />
        <TwitterShareButton
          url="http://google.com"
          children={<FontAwesomeIcon 
            icon={faTwitterSquare}
            className="quiz-share-icon"
            />} className="quiz-result-title"
          title="B: イエベ秋"
          via="bijin_carte"
          hashtags={["bijincarte", "findyourbeauty"]}
        />
      </div>
    }
    {resultType === "C" &&
      <div className="quiz-result-container">
        <h1 className="quiz-result-title">C: ブルベ夏</h1>
        <div className="quiz-result-color-box">
          <img src="https://images.unsplash.com/photo-1534237649404-2cc344128fdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt="hydrangea" className="quiz-result-image" />
          <p className="quiz-result-text">青みで明るくソフトな色</p>
        </div>
      </div>
    }
    {resultType === "D" &&
      <div className="quiz-result-container">
        <h1 className="quiz-result-title">D: ブルベ冬</h1>
        <div className="quiz-result-color-box">
          <img src="https://images.unsplash.com/photo-1547457604-7d43509866ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt="winter berries" className="quiz-result-image" />
          <p className="quiz-result-text">青みで暗い色&ビビットな色</p>
        </div>
      </div>
    }

  </div>
  
)

export default Result;