import React, { Fragment } from 'react';
import { ProgressBar } from './progressbar';

export const Header = ( props ) => {
  const { todos } = props;
  return(
    <Fragment>
      <h1 style={{
        width: "30%",
        margin: "30px auto"
      }}> My ToDo App </h1>
      <ProgressBar todos={ todos } />
    </Fragment>
  );
}
