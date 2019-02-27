import React from "react";
import Proptypes from "prop-types";

const Button = ({
  icon, text, className, onClick,
}) => (
  <button type="button" className={className} onClick={onClick}>
    <i className={icon} />
    {text}
  </button>
);

Button.propTypes = {
  className: Proptypes.string,
  text: Proptypes.string,
  icon: Proptypes.string,
  onClick: Proptypes.func,
};

Button.defaultProps = {
  className: "",
  text: "",
  icon: "",
  onClick: () => {},
};

export default Button;
