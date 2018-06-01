import React, { Fragment } from 'react';
import { ProgressBar } from './progressbar';

export const Header = ( props ) => {
  const { percent } = props;
  const style = { width: "30%", margin: "30px auto" };
  return(
    <Fragment>
      <h1 style={ style }> My ToDo App </h1>
      <ProgressBar percent={ percent } />
    </Fragment>
  );
}
