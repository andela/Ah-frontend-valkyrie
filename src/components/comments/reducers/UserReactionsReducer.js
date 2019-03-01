import commentsActionTypes from "../actions/action_types";

export const initialState = {
  comment: {},
  error: null,
};

const LikeReducer = (state = initialState.comment, action) => {
  switch (action.type) {
  case commentsActionTypes.LIKE_COMMENT:
    return Object.assign(
      {}, state, { comment: action.payload },
    );

  case commentsActionTypes.LIKE_COMMENT_ERROR:
    return Object.assign(
      {}, state, { error: action.payload },
    );

  default:
    return state;
  }
};

export default LikeReducer;
