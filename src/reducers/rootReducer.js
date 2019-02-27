import { combineReducers } from "redux";
import loginReducer from "./loginRecucer";
import errorReducer from "./errorReducer";
import signupReducer from "./signupReducer";
import profile from "./profile";
import passwordResetReducer from "./passwordResetReducer";
import articleReducer from "./articleReducer";
import commentReducer from "../components/comments/reducers/commentReducer";
import LikeReducer from "../components/comments/reducers/UserReactionsReducer";
import rateReducer from "./rateReducer";
import socialShareReducer from "./socialShareReducer";
import bookmarkReducer from "../components/Bookmarks/reducers/bookmarkReducer";
import notificationReducer from "./notificationReducer";
import likeDislikeArticleReducer from "./likeArticleReducer";

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
  reactions: LikeReducer,
  bookmarkReducer,
  notifications: notificationReducer,
  like: likeDislikeArticleReducer,
});
