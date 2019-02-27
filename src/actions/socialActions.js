import axios from "axios";
import jwt_decode from "jwt-decode";
import { loginSuccess } from "./loginActions";
import setAuthToken from "../utils/setAuthToken";
import { getErrors } from "./index";

const host = process.env.HOST;

export const handleServerResponse = (response) => {
  const { auth_token } = response.data.user;
  localStorage.setItem("auth_token", auth_token);
  setAuthToken(auth_token);
  const userData = jwt_decode(auth_token);
  return loginSuccess(userData);
};

export const socialLogin = (token, provider) => (dispatch) => {
  let url = `${host}/auth/google/`;

  if (provider === "facebook.com") {
    url = `${host}/auth/facebook/`;
  }
  const data = {
    user: {
      auth_token: token,
    },
  };

  return axios
    .post(url, data)
    .then((response) => {
      dispatch(handleServerResponse(response));
      window.location.href = "/";
    })
    .catch((error) => {
      dispatch(getErrors(error.response.data));
    });
};
