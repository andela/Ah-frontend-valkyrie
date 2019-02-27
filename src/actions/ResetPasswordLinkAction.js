import axios from "axios";
import actionTypes from "./actionTypes";

export const passwordResetSuccess = message => (
  {
    type: actionTypes.PASSWORD_RESET_SUCCESS,
    payload: message,
  }
);

export const passwordResetFail = error => (
  {
    type: actionTypes.PASSWORD_RESET_FAILED,
    payload: error,
  }
);

export const resetPasswordAction = email => (dispatch) => {
  const url = `${process.env.HOST}/users/reset_password`;
  return axios({
    url,
    method: "POST",
    data: { email },
    headers: {
      "Content-Type": "application/json",
    },
    mode: "no-cors",
    cache: "no-cache",
  },
  )
    .then((response) => {
      dispatch(passwordResetSuccess(response.data.user.message));
    })
    .catch((error) => {
      dispatch(passwordResetFail(error.response.data.user.detail));
    },
    );
};
