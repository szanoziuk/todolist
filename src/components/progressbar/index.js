import React from 'react';
import propTypes from 'prop-types';

import './index.css';

export const ProgressBar = ({ percent }) => {
  const width = ( percent || 0 ) + '%';
  const style = { width };
  return(
    <div className="wrapper"> Total Progress
      <div className="border">
        <div className="progress-bar" style={style}></div>
      </div>
      { width }
    </div>
  );
};

ProgressBar.propTypes = {
 percent: propTypes.number.isRequired
};
