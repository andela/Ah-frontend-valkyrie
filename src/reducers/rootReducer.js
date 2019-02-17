import { combineReducers } from "redux";
import loginReducer from "./loginRecucer";
import signupReducer from "./signupReducer";
import profile from "./profile";

export default combineReducers({
  loginReducer,
  signupReducer,
  profile,
});
