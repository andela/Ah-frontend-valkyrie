import axios from "axios";
import actionTypes from "./actionTypes";


export const passwordChangeSuccess = message => (
  {
    type: actionTypes.PASSWORD_RESET_SUCCESS,
    payload: message,
  }
);

export const passwordChangeFail = error => (
  {
    type: actionTypes.PASSWORD_RESET_FAILED,
    payload: error,
  }
);

export const changePasswordAction = (password, token) => (dispatch) => {
  const url = `${process.env.HOST}/users/reset_password_confirm/${token}`;
  const data = { password };
  axios({
    url,
    method: "PUT",
    data: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    mode: "no-cors",
    cache: "no-cache",
  },
  )
    .then((response) => {
      dispatch(passwordChangeSuccess(response.data.user.message));
    },
    )
    .catch((error) => {
      dispatch(passwordChangeFail(error.response.data.errors.password));
    },
    );
};
