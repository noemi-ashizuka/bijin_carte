import React from 'react';
import Button from './Button';
import {
  FacebookShareButton,
  TwitterShareButton
} from 'react-share';

const Result = ({resultType}) => (
  <div>
    {resultType === "A" &&
      <div>
        <h1>A: イエベ春</h1>
        <img src="https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt="cherry blossoms" />
        <p>黄みで明るくクリアな色</p>
      </div>
    }
    {resultType === "B" &&
      <div>
        <h1>B: イエベ秋</h1>
        <img src="https://images.unsplash.com/photo-1538580619159-6c19131e1062?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt="fall leaves" />
        <p>黄みで暗くシックな色</p>
        <FacebookShareButton url="http://google.com" children={<Button title="Share on Facebook" />} quote="B: イエベ秋" hashtag="findyourbeauty" />
        <TwitterShareButton url="http://google.com" children={<Button title="Share on Twitter" />} title="Bijin Carte" hashtags={["bijincarte", "findyourbeauty"]} />
      </div>
    }
    {resultType === "C" &&
      <div>
        <h1>C: ブルベ夏</h1>
        <img src="https://images.unsplash.com/photo-1534237649404-2cc344128fdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt="hydrangea" />
        <p>青みで明るくソフトな色</p>
      </div>
    }
    {resultType === "D" &&
      <div>
        <h1>D: ブルベ冬</h1>
        <img src="https://images.unsplash.com/photo-1547457604-7d43509866ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt="winter berries" />
        <p>青みで暗い色&ビビットな色</p>
      </div>
    }

  </div>
  
)

export default Result;