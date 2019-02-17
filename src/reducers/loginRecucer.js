import {
  SET_LOGIN_PENDING, SET_LOGIN_SUCCESS, SET_LOGIN_ERROR, SET_CURRENT_USER,
} from "../actions/loginActions";

const initialState = {
  loginSuccess: {},
  isLoginPending: false,
  loginError: null,
  isAuthenticated: false,
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_LOGIN_PENDING:
    return Object.assign({}, state, {
      isLoginPending: action.isLoginPending,
    });
  case SET_LOGIN_SUCCESS:
    return Object.assign({}, state, action.user);

  case SET_CURRENT_USER:
    return Object.assign({}, state, {
      isAuthenticated: action.isAuthenticated,
      isLoginPending: false,
    });

  case SET_LOGIN_ERROR:
    return Object.assign({}, state, {
      loginError: action.loginError,
    });
  default:
    return state;
  }
};
export default loginReducer;
