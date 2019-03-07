import axios from "axios";
import actionTypes from "./actionTypes";

const base_url = `${process.env.HOST}`;

export const followUser = username => dispatch => {
  return axios({
    url: base_url + `/users/${username}/profile/follow`,
    method: "POST"
  })
    .then(data => {
      return dispatch({
        type: actionTypes.FOLLOW_USER,
        payload: data.data.profile
      });
    })
    .catch(err => err);
};

export const unFollowUser = username => dispatch => {
  return axios({
    url: base_url + `/users/${username}/profile/follow`,
    method: "DELETE"
  })
    .then(data => {
      dispatch({
        type: actionTypes.UNFOLLOW_USER,
        payload: data.data.profile
      });
    })
    .catch(err => err);
};

export const getFollowing = () => dispatch => {
  return axios
    .get(base_url + `/users/me/profile/followings`)
    .then(data => {
      dispatch({
        type: actionTypes.GET_FOLLOWING,
        payload: data.data.followings
      });
    })
    .catch(err => err);
};

export const getFollowers = () => dispatch => {
  return axios({
    url: base_url + `/users/me/profile/followers`,
    method: "GET"
  })
    .then(data => {
      dispatch({
        type: actionTypes.GET_FOLLOWERS,
        payload: data.profile.followers
      });
    })
    .catch(err => err);
};
