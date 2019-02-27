import {
  SET_LOGIN_PENDING,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR,
  SET_CURRENT_USER,
} from "../actions/loginActions";
import isEmpty from "../validations/isEmpty";

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
    return Object.assign({}, state, {
      id: action.user.id,
      user: action.user,
      isAuthenticated: !isEmpty(action.user),
    });
  case SET_CURRENT_USER:
    return Object.assign({}, state, {
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
