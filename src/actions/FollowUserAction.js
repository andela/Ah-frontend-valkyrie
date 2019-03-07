import actionTypes from "./actionTypes";

const base_url = `${process.env.HOST}`;
const token = window.localStorage.getItem("auth_token");

export const followUser = username => dispatch => {
  console.log(token);
  return fetch(base_url + `/users/${username}/profile/follow`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log("follow", data);
      return dispatch({
        type: actionTypes.FOLLOW_USER,
        payload: data.profile
      });
    })
    .catch(err => err);
};

export const unFollowUser = username => dispatch => {
  return fetch(base_url + `/users/${username}/profile/follow`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log("unfollow", data);
      dispatch({
        type: actionTypes.UNFOLLOW_USER,
        payload: data.profile
      });
    })
    .catch(err => err);
};

export const getFollowing = () => dispatch => {
  return fetch(base_url + `/users/me/profile/followings`, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log("all_followings", data);
      dispatch({
        type: actionTypes.GET_FOLLOWING,
        payload: data.followings
      });
    })
    .catch(err => err);
};

export const getFollowers = () => dispatch => {
  return fetch(base_url + `/users/me/profile/followers`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log("followers", data);
      dispatch({
        type: actionTypes.GET_FOLLOWERS,
        payload: data.followers
      });
    })
    .catch(err => err);
};
