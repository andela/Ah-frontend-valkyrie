import { combineReducers } from "redux";
import loginReducer from "./loginRecucer";
import errorReducer from "./errorReducer";
import signupReducer from "./signupReducer";
import profile from "./profile";
import passwordResetReducer from "./passwordResetReducer";
import articleReducer from "./articleReducer";
import commentReducer from "../components/comments/reducers/commentReducer";
import rateReducer from "./rateReducer";
import socialShareReducer from "./socialShareReducer";

export default combineReducers({
  loginReducer,
  signupReducer,
  profile,
  passwordResetReducer,
  articles: articleReducer,
  errors: errorReducer,
  comments: commentReducer,
  rated: rateReducer,
  socialShareReducer,
});
