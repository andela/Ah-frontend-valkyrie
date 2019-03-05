import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchComments } from "./actions/actions";
import SingleComment from "./SingleComment";

export class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    const { articleSlug } = this.props;
    this.props.fetchComments(articleSlug);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ comments: nextProps.comments });
  }

  render() {
    const { comments } = this.state;
    const { articleSlug } = this.props;
    return (
      <Fragment>
        <div className="comments mt-5">
          <h6>Comments</h6>
          <hr />
          {comments.map(comment => (
            <SingleComment
              key={comment.id}
              comment={comment}
              articleSlug={articleSlug}
              commentBody={comment.body}
              commentId={comment.id}
              username={comment.author.username}
              createdOn={comment.createdAt}
              commentHistory={comment.comment_history}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

Comment.propTypes = {
  fetchComments: PropTypes.func.isRequired,
  articleSlug: PropTypes.string.isRequired,
  comments: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = state => ({
  comments: state.comments.comments,
});

export default connect(
  mapStateToProps,
  { fetchComments },
)(Comment);
