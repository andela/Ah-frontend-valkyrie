import axios from "axios";
import jwt_decode from "jwt-decode";

export const SET_LOGIN_PENDING = "SET_LOGIN_PENDING";
export const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS";
export const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

const host = process.env.HOST;

export const setLoginPending = isLoginPending => ({
  type: SET_LOGIN_PENDING,
  isLoginPending,
});

export const loginSuccess = user => ({ type: SET_LOGIN_SUCCESS, user });

export const setLoginError = loginError => ({
  type: SET_LOGIN_ERROR,
  loginError,
});

export const login = (email, password) => (dispatch) => {
  const url = `${host}/users/login/`;
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
      const { token } = response.data.user;
      localStorage.setItem("auth_token", token);
      const decodedData = jwt_decode(token);
      dispatch(loginSuccess(decodedData));
      window.location.href = "/";
    })
    .catch(error => dispatch(setLoginError(error.response.data.errors.error)));
};
