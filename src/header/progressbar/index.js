import React from 'react';

import './index.css';

export const ProgressBar = ({ percent }) => {
  const width = percent + '%';
  const style = { width };
  return(
    <div className="wrapper"> Total Progress
      <div className="border">
        <div className="progress-bar" style={style}></div>
      </div>
      { width }
    </div>
  );
}
