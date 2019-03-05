import React, { Fragment } from "react";
import PropTypes from "prop-types";

const SingleCommentButtons = ({
  confirmationDialog,
  onClickEditArticle,
  commentHistory,
  handleCommentHistory,
}) => (
  <Fragment>
    <button type="button" onClick={confirmationDialog} className="btn btn-link text-danger">
      <i className="fas fa-trash-alt">
        <span className="icons"> Delete</span>
      </i>
    </button>
    <button type="button" className="btn btn-link text-primary" onClick={onClickEditArticle}>
      <i className="fas fa-edit">
        <span className="icons"> Edit</span>
      </i>
    </button>
    {commentHistory.length > 0 ? (
      <button
        type="button"
        className="btn btn-link text-primary"
        data-toggle="tooltip"
        data-placement="top"
        title="Comment History"
        onClick={handleCommentHistory}
        data-test="component-show-history"
      >
        <i className="fas fa-history" />
      </button>
    ) : (
      ""
    )}
  </Fragment>
);

SingleCommentButtons.propTypes = {
  confirmationDialog: PropTypes.func.isRequired,
  onClickEditArticle: PropTypes.func.isRequired,
  commentHistory: PropTypes.instanceOf(Array).isRequired,
  handleCommentHistory: PropTypes.func.isRequired,
};

export default SingleCommentButtons;
