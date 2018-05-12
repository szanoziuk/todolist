import React, { Fragment } from 'react';
import { ProgressBar } from './progressbar';

export const Header = ({ todos }) => {
  return(
    <Fragment>
      <h1> My ToDo App </h1>
      <ProgressBar todos={ todos } />
    </Fragment>
  );
}
