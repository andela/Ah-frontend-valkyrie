import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import EditComment from "./EditComment";
import { deleteComment } from "./actions/actions";
import CommentHistory from "./CommentHistory";
import SingleCommentButtons from "./SingleCommentButtons";

export class SingleComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleForm: "d-none",
      showHistory: false,
    };
  }

  onClickEditArticle = () => {
    this.shouldToggleForm();
  };

  shouldToggleForm = () => {
    const { toggleForm } = this.state;
    if (toggleForm === "d-block") {
      this.setState({ toggleForm: "d-none" });
    } else {
      this.setState({ toggleForm: "d-block" });
    }
  };

  handleOnDelete = () => {
    const { articleSlug, commentId } = this.props;
    this.props.deleteComment(articleSlug, commentId);
  };

  handleCommentHistory = () => {
    const { showHistory } = this.state;
    this.setState({ showHistory: !showHistory });
  };

  confirmationDialog = () => {
    confirmAlert({
      title: "Delete Comment",
      message: "Do you want to continue?",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.handleOnDelete(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  render() {
    const {
      commentId,
      articleSlug,
      commentBody,
      username,
      createdOn,
      commentHistory,
      comment,
    } = this.props;
    const { toggleForm, showHistory } = this.state;
    const { authUser } = this.props;
    return (
      <div>
        <div className="single-comment">
          <p className="comment-text">{commentBody}</p>
          <div className="actions">
            <span className="mr-4">
              <span>@</span>
              <span className="font-italic">{username}</span>
            </span>
            <span className="mr-1">(0)</span>
            <i className="fa fa-thumbs-up text-success mr-3" />
            <span className="mr-1">(0)</span>
            <i className="fa fa-thumbs-down text-danger mr-3" />
            {authUser.isAuthenticated && authUser.user.username === username ? (
              <SingleCommentButtons
                confirmationDialog={this.confirmationDialog}
                onClickEditArticle={this.onClickEditArticle}
                commentHistory={commentHistory}
                handleCommentHistory={this.handleCommentHistory}
              />
            ) : (
              ""
            )}
            <Link to="/" className="text-primary" />
            <span className="text-muted text-small font-italic">
              <span>Added: </span>
              <Moment parse="YYYY-MM-DD HH:mm">{createdOn}</Moment>
            </span>
          </div>
          <EditComment
            commentId={commentId}
            articleSlug={articleSlug}
            toggleForm={toggleForm}
            commentBody={commentBody}
          />
          {showHistory ? <CommentHistory commentHistory={commentHistory} /> : ""}
        </div>
      </div>
    );
  }
}

SingleComment.propTypes = {
  comment: PropTypes.instanceOf(Object).isRequired,
  articleSlug: PropTypes.string.isRequired,
  commentId: PropTypes.number.isRequired,
  commentBody: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  createdOn: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired,
  commentHistory: PropTypes.instanceOf(Object).isRequired,
  authUser: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  authUser: state.loginReducer,
});

export default connect(
  mapStateToProps,
  { deleteComment },
)(SingleComment);
