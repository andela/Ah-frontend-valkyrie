/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import PropTypes from "prop-types";

const SpecialPageItem = ({ arialLabel, clicked, icon }) => (
  <li className="page-item" onClick={clicked}>
    <a className="page-link" aria-label={arialLabel}>
      <i className={icon} />
      <span className="sr-only">{arialLabel}</span>
    </a>
  </li>
);

SpecialPageItem.propTypes = {
  arialLabel: PropTypes.string,
  clicked: PropTypes.func.isRequired,
  icon: PropTypes.string,
};

SpecialPageItem.defaultProps = {
  arialLabel: "",
  icon: "",
};

export default SpecialPageItem;
