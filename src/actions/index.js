import { loginSuccess } from "./loginActions";
import { GET_ERRORS } from "./types";

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch(loginSuccess({}));
};

export const getErrors = error => ({
  type: GET_ERRORS,
  payload: error,
});
