import React from 'react';
import { Link } from 'react-router-dom';

import './BackButton.css';

const BackButton = () => (
  <Link to="/" className="back-link">
    <div className="back-button">
      <i className="fa fa-arrow-left"></i>
        Back to portfolio
    </div>
  </Link>

);

export default BackButton;
