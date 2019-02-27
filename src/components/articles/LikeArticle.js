import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { likeDislikeArticle } from "../../actions/likeArticleActions";

export class LikeArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: null,
      disliked: null,
      likesCount: this.props.likesCount,
      dislikesCount: this.props.dislikesCount,
      usersWhoLiked: this.props.usersWhoLiked,
      usersWhoDisliked: this.props.usersWhoDisliked,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if(this.props.authUser.isAuthenticated){
      if(this.state.usersWhoLiked.includes(this.props.authUser.user.username)) {
        this.setState({ liked: true });
      }

      if(this.state.usersWhoDisliked.includes(this.props.authUser.user.username)) {
        this.setState({ disliked: true });
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ likesCount: nextProps.likesCount });
    this.setState({ dislikesCount: nextProps.dislikesCount });
    this.setState({ usersWhoLiked: nextProps.usersWhoLiked });
    this.setState({ usersWhoDisliked: nextProps.usersWhoDisliked });
  }

  handleClick = (e) => {
    e.preventDefault();
    const results = { like: { likes: e.target.id } };
    const btnChoice = results.like.likes;
    let likeStatus;
    if (btnChoice === "like-btn") {
      likeStatus = true;
      if (this.state.liked) {
        likeStatus = null;
      } else {
        likeStatus = true;
      }
      this.setState({ liked: likeStatus });
      this.props.likeDislikeArticle(this.props.slug, true);
    } else {
      if (this.state.disliked == null) {
        likeStatus = true;
      } else {
        likeStatus = null;
      }
      this.setState({ disliked: likeStatus });
      this.props.likeDislikeArticle(this.props.slug, false);
    }
  };

  render() {
    const { like, count, error, authUser } = this.props;
    return (
      <span id="like-buttons">
        <i
          className={this.state.liked ? 'fa fa-thumbs-up text-primary' : 'fa fa-thumbs-up text-secondary'}
          onClick={ this.handleClick }
          id="like-btn"
        />
        &nbsp;
        (
        {this.state.likesCount}
        )
        &nbsp; &nbsp;
        <i
          className={this.state.disliked ? 'fa fa-thumbs-down text-danger' : 'fa fa-thumbs-down text-secondary'}
          onClick={ this.handleClick }
          id = "dislike-btn"
        />
            &nbsp;
        (
        {this.state.dislikesCount}
        )
        &nbsp; &nbsp;
      </span>
    );
  }
}

LikeArticle.propTypes = {
  slug: PropTypes.string.isRequired,
  dislikesCount: PropTypes.number.isRequired,
  likesCount: PropTypes.number.isRequired,
  likeDislikeArticle: PropTypes.func,
};

const mapStateToProps = state => ({
  like: state.like.like,
  error: state.like.error,
  count: state.like.count,
  authUser: state.loginReducer,
});

export default connect(mapStateToProps, { likeDislikeArticle })(LikeArticle);
