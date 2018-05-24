import React from 'react';
import { filter } from 'lodash';

import './index.css';

export const ProgressBar = ({ todos }) => {
  const width = getWidth( todos );
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

function getWidth(obj){
  const total = Object.keys( obj ).length;
  const checked = filter( obj, item => item.done ).length;
  if ( total ) {
    return  Math.round((checked/total)*100) + '%';
  }
  return '0%';
}
