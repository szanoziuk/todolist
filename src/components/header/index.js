import React, { Fragment } from 'react';
import { ProgressBar } from '../progressbar';
import propTypes from 'prop-types';

export const Header = ({ percent }) => {
  const style = { width: "30%", margin: "30px auto" };
  return(
    <Fragment>
      <h1 style={ style }> My ToDo App </h1>
      <hr />
      <ProgressBar percent={ percent } />
      <hr />
    </Fragment>
  );
};


Header.propTypes = {
  percent: propTypes.number.isRequired
};
