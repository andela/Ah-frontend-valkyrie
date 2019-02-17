import axios from "axios";
import jwt_decode from "jwt-decode";

export const SET_LOGIN_PENDING = "SET_LOGIN_PENDING";
export const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS";
export const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const setLoginPending = isLoginPending => ({ type: SET_LOGIN_PENDING, isLoginPending });

export const loginSuccess = user => ({ type: SET_LOGIN_SUCCESS, user });

export const setLoginError = loginError => ({ type: SET_LOGIN_ERROR, loginError });

export const setCurrentUser = isAuthenticated => ({ type: SET_CURRENT_USER, isAuthenticated });

export const login = (email, password) => (dispatch) => {
  const url = "https://ah-backend-valkyrie-staging.herokuapp.com/api/v1/users/login/";
  const data = {
    user: {
      email,
      password,
    },
  };
  const requestData = {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };
  dispatch(setLoginPending(true));
  return axios(url, requestData)
    .then((response) => {
      dispatch(setCurrentUser(true));
      const { token } = response.data.user;
      localStorage.setItem("auth_token", token);
      const decodedData = jwt_decode(token);
      dispatch(loginSuccess(decodedData));
      window.location.href = "/";
    })
    .catch(error => dispatch(setLoginError(error.response.data.errors.error)));
};
