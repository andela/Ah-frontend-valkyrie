import React, { Component } from "react";
import "../layout/styles/followButton.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UserButton from "./UserButton";

import {
  followUser,
  unFollowUser,
  getFollowing
} from "../../actions/FollowUserAction";
import "../layout/styles/followButton.css";

export class FollowButtonView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_value: "btn_follow",
      text: "Follow",
      following: false
    };
  }

  componentDidMount() {
    this.props.getFollowing();
  }

  componentWillReceiveProps(nextProps) {
    if ("following" in nextProps.followData) {
      const { following } = nextProps.followData;
      if (following) {
        this.setState({
          id_value: "btn_unfollow",
          text: "Following",
          following: true
        });
      } else {
        this.setState({
          id_value: "btn_follow",
          text: "Follow",
          following: false
        });
      }
    }

    const { followData } = nextProps;
    const { article } = this.props;

    if (Object.entries(article).length !== 0) {
      const username = article.author.username;
      let following = false;
      if (Array.isArray(followData)) {
        for (let i in followData) {
          following = Object.is(followData[i]["username"], username);
          if (following) {
            this.setState({
              id_value: "btn_unfollow",
              text: "Following",
              following: true
            });
            break;
          }
        }
        if (!following) {
          this.setState({
            id_value: "btn_follow",
            text: "Follow",
            following: false
          });
        }
      }
    }
  }

  handleClick = () => {
    const { following } = this.state;
    const { followUser, unFollowUser, article } = this.props;
    const username = article.author.username;
    if (following) {
      unFollowUser(username);
    } else {
      followUser(username);
    }
  };

  render() {
    const { id_value, text } = this.state;
    const { authUser, author, username } = this.props;
    const user = authUser.username;
    let canFollow = false;
    if (author) {
      canFollow = user === username ? true : false;
    }

    return (
      <UserButton
        id_value={id_value}
        handleClick={this.handleClick}
        canFollow={canFollow}
        text={text}
      />
    );
  }
}

FollowButtonView.propTypes = {
  followUser: PropTypes.func,
  unFollowUser: PropTypes.func,
  getFollowing: PropTypes.func,
  followData: PropTypes.array,
  author: PropTypes.string
};

const mapStateToProps = state => ({
  authUser: state.loginReducer,
  followData: state.follow.data
});

export default connect(
  mapStateToProps,
  { followUser, unFollowUser, getFollowing }
)(FollowButtonView);
