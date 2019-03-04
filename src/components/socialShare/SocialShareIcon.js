import React from "react";
import PropTypes from "prop-types";

const SocialShareIcon = ({ provider, clicked, className }) => (
  <i className={className} provider={provider} onClick={clicked} />
);
SocialShareIcon.propTypes = {
  provider: PropTypes.string,
  clicked: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
SocialShareIcon.defaultProps = {
  provider: "",
};
export default SocialShareIcon;
