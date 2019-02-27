import React from "react";
import PropTypes from "prop-types";

const Alert = ({ children, className }) => (
  <div className={className} role="alert">
    {children}
  </div>
);

Alert.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Alert;
