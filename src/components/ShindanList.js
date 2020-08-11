import React from 'react';
import {Link} from 'gatsby';
import '../styles/shindanlist.scss';

const ShindanList = () => (
  <div className="shindan-wrapper">
    <h1 className="shindan-title">Shindan</h1>
    <h3 className="shindan-subtitle">今のあなたが仕方そのうち不都合で、壇の話まではできるだけ見ずのがえらいとありがは高いまでのので。</h3>
    <div className="shindan-container">
      <Link to="/quizApp" className="shindan-thumb">
        <div>
          Personal Color
        </div>
      </Link>
      <Link to="/quizApp" className="shindan-thumb">
        <div>
          Coming Soon
        </div>
      </Link>
      <Link to="/quizApp" className="shindan-thumb">
        <div>
          Coming Soon
        </div>
      </Link>
    </div>
  </div>
)

export default ShindanList;
