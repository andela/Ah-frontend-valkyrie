import React, { Fragment } from 'react';

const Loader = props => (
  <Fragment>
    <div className="alert alert-info" role="alert">
      <i className="fas fa-circle-notch fa-spin text-info" />
      &nbsp;
      {props.text}
    </div>
  </Fragment>
);

export default Loader;
