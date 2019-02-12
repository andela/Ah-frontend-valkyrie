import { combineReducers } from "redux";
import loginReducer from "./loginRecucer";
import signupReducer from "./signupReducer";

export default combineReducers({
  loginReducer,
  signupReducer
});
