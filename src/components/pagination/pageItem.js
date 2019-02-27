/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import PropTypes from "prop-types";

const PageItem = ({ label, clicked }) => (
  <li className="page-item" onClick={clicked}>
    <a className="page-link checked-item">{label}</a>
  </li>
);

PageItem.propTypes = {
  label: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default PageItem;
