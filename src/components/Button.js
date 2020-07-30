import React from 'react';
import '../styles/buttons.scss';

const Button = (children) => (
  <div className="button-standard">
    <p>{children}</p>
  </div>
)

export default Button;