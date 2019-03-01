import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toLikeComment } from "../comments/actions/actions";

export class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likesCount: this.props.comment.comment_likes.count,
      dislikesCount: this.props.comment.comment_dislikes.count,
      response: "",
      commentID: 0,
    };
  }

  componentWillReceiveProps(nextProps) {  
    if (nextProps.commentResponse.data_id !== this.props.comment.id) {
      return;
    }
    if (nextProps.commentResponse.data.message === "comment liked" || nextProps.commentResponse.data.message === "Comment liked") {
      this.setState({ 
        dislikesCount: this.state.dislikesCount > 0 ? this.state.dislikesCount - 1 : 0,
        likesCount: this.state.likesCount > 0 ?  this.state.likesCount + 1 : 1,
        response: nextProps.commentResponse.message,
      });
    
    } else if (nextProps.commentResponse.data.message === "comment disliked") {
      this.setState({ 
        response: nextProps.commentResponse.message,
        likesCount: this.state.likesCount > 0 ?  this.state.likesCount - 1 : 0,
        dislikesCount: this.state.dislikesCount + 1,
      });
    }
  }

  likeCommentHandler = () => {
    const { comment } = this.props;
    this.setState({ commentID: comment.id });
    this.props.toLikeComment(comment.id, "like");
  }

  render() {
    const { likesCount, dislikesCount, response } = this.state;
    return (
      <span>
            &nbsp; &nbsp; &nbsp; ( 
        {' '}
        { likesCount }
        {' '}
) &nbsp;
        <i 
          className={
            `fa fa-thumbs-up text-${ response === 'comment liked' || likesCount > 0 ? 'primary' : 'secondary' } cursor-pointer`} 
          onClick={ this.likeCommentHandler } />
            &nbsp; &nbsp; &nbsp;
      </span>
    );
  }
}

Like.propTypes = {
  comment: PropTypes.object.isRequired,
  toLikeComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  authUser: state.loginReducer,
  commentResponse: state.reactions.comment,
});

export default connect(mapStateToProps, { toLikeComment })(Like);
