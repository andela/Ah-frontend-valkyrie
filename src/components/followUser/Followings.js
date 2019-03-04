import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import {
  followUser,
  unFollowUser,
  getFollowing
} from "../../actions/FollowUserAction";
import ViewFollowing from "./viewFollowing/viewFollowing";
import avatar from "../../assets/images/img_avatar.png";

export const imageShow = image => {
  return image === "" ? avatar : image;
};

export class Following extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followingData: [],
      id_value: "btn_follow",
      text: "Following",
      canFollow: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.getFollowing();
  }
  componentWillReceiveProps(nextProps) {
    const { following } = nextProps;
    this.setState({ followingData: following });
  }

  handleClick = username => {
    const { text } = this.state;
    const { followUser, unFollowUser } = this.props;

    if (text === "Following") {
      unFollowUser(username);
    } else {
      followUser(username);
    }
  };

  render() {
    const { followingData, id_value, text, canFollow } = this.state;
    let i = 0;

    if (!Array.isArray(followingData) || !followingData.length) {
      return <div />;
    } else if (Array.isArray(followingData)) {
      return (
        <div>
          {followingData.map(followers => {
            return (
              <div>
                <ViewFollowing
                  key={i++}
                  Image={imageShow(followers.image)}
                  Username={followers.username}
                  Bio={followers.bio}
                  canFollow={canFollow}
                  handleClick={() => this.handleClick(followers.username)}
                  id_Value={id_value}
                  text={text}
                />
              </div>
            );
          })}
        </div>
      );
    }
  }
}
Following.propTypes = {
  getFollowing: propTypes.func,
  followUser: propTypes.func,
  unFollowUser: propTypes.func,
  following: propTypes.shape([])
};
// Following.defaultProps = {
//   getFollowing: () => {},
//   following: []
// };
export const mapStateToProps = state => {
  return {
    following: state.follow.data
  };
};

export default connect(
  mapStateToProps,
  { followUser, unFollowUser, getFollowing }
)(Following);
