import React from 'react';
import '../styles/buttons.scss';

const Button = (props) => (
  <div className="button-standard"><p className="button-text">{props.title}</p></div>
)

export default Button;