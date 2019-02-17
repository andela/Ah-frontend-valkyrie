import APP_URL from "../../../utils/globals";

export const PROFILE_BEGIN = "PROFILE_BEGIN";
export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
export const FETCH_PROFILE_FAILURE = "FETCH_PROFILE_FAILURE";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAILURE = "UPDATE_PROFILE_FAILURE";

const AUTH_TOKEN = localStorage.getItem("auth_token");
const fetch = require("node-fetch");

export const fetchProfileBegin = () => ({
  type: PROFILE_BEGIN,
});

export const fetchProfileSuccess = profile => ({
  type: FETCH_PROFILE_SUCCESS,
  payload: { profile },
});

export const fetchProfileFailure = error => ({
  type: FETCH_PROFILE_FAILURE,
  payload: { error },
});

export const updateProfileBegin = () => ({
  type: PROFILE_BEGIN,
});

export const updateProfileSuccess = user => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: { user },
});

export const updateProfileFailure = error => ({
  type: UPDATE_PROFILE_FAILURE,
  payload: { error },
});

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function fetchProfile(userId) {
  return (dispatch) => {
    dispatch(fetchProfileBegin());
    return fetch(
      `${APP_URL}/users/${userId}/`,
      {
        method: "GET",
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      },
    )
      .then(handleErrors)
      .then(res => res.json())
      .then((json) => {
        dispatch(fetchProfileSuccess(json.user));
        return json.user;
      })
      .catch(error => dispatch(fetchProfileFailure(error)));
  };
}

export function updateProfile(data, userId) {
  return (dispatch) => {
    dispatch(updateProfileBegin());
    return fetch(
      `${APP_URL}/users/${userId}/`,
      {
        method: "PUT",
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
        CORS: "no-cors",
        body: JSON.stringify(data),
      },
    )
      .then(handleErrors)
      .then(res => res.json())
      .then((json) => {
        dispatch(updateProfileSuccess(json.user));
        return json.user;
      })
      .catch(error => dispatch(updateProfileFailure(error)));
  };
}
