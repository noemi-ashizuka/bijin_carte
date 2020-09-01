import React from 'react';
import {Link} from 'gatsby';
import {Fade} from 'react-reveal';
import '../styles/shindanlist.scss';

const ShindanList = () => (
  <div className="shindan-wrapper">
    <h1 className="shindan-title">Shindan</h1>
    <h3 className="shindan-subtitle">まずは、あなた自身のことを知りましょう。３分で、あなたの肌質や、パーソナルカラーがわかります。</h3>
    <Fade right duration={1500}>
      <div className="shindan-container">
        <Link to="/shindanA" className="shindan-thumb">
          <div>
            Personal Color
          </div>
        </Link>
        <Link to="/shindanB" className="shindan-thumb">
          <div>
            Skin Type
          </div>
        </Link>
        <Link to="#" className="shindan-thumb">
          <div>
            Coming Soon
          </div>
        </Link>
      </div>
    </Fade>
  </div>
)

export default ShindanList;
