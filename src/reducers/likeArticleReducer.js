import {
  LIKE_DISLIKE_ARTICLE,
  LIKE_DISLIKE_FAILURE,
} from "../actions/likeArticleActions";

const initialState = {
  like: {},
  error: null,
  count: 0,
};

export default function likeDislikeArticleReducer(state = initialState, action) {
  switch (action.type) {
  case LIKE_DISLIKE_ARTICLE:
    return {
      ...state,
      like: action.payload,
      count: 1,
    };

  case LIKE_DISLIKE_FAILURE:
    return {
      ...state,
      error: action.payload,
    };

  default:
    return state;
  }
}
