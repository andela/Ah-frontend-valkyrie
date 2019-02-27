import { combineReducers } from "redux";
import loginReducer from "./loginRecucer";
import errorReducer from "./errorReducer";
import signupReducer from "./signupReducer";
import profile from "./profile";
import passwordResetReducer from "./passwordResetReducer";
import articleReducer from "./articleReducer";

export default combineReducers({
  loginReducer,
  signupReducer,
  profile,
  passwordResetReducer,
  articles: articleReducer,
  errors: errorReducer,
});
