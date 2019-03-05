import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editComment } from "./actions/actions";

export class EditComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedCommentBody: "",
    };
  }

  handleOnChange = (event) => {
    this.setState({
      updatedCommentBody: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { articleSlug, commentId, commentBody } = this.props;
    const { updatedCommentBody } = this.state;
    const comment = {
      comment: {
        body: updatedCommentBody !== null ? updatedCommentBody : commentBody,
      },
    };
    this.props.editComment(articleSlug, commentId, comment);
  };

  render() {
    const { toggleForm, commentBody } = this.props;
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit} className={toggleForm || "d-none"}>
          <div className="form-group">
            <textarea
              id="hide-text-box"
              name="body"
              defaultValue={commentBody}
              className="form-control expand-text-box"
              onChange={this.handleOnChange}
              required
            />
          </div>
          <div className="button">
            <input type="submit" value="Edit comment" className="btn btn-sm btn-primary mb-6" />
          </div>
        </form>
      </Fragment>
    );
  }
}

EditComment.propTypes = {
  articleSlug: PropTypes.string.isRequired,
  commentId: PropTypes.number.isRequired,
  toggleForm: PropTypes.string.isRequired,
  commentBody: PropTypes.string.isRequired,
  editComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(
  mapStateToProps,
  { editComment },
)(EditComment);
