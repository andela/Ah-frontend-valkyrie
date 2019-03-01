import LikeReducer from "./UserReactionsReducer";
import commentsActionTypes from "../actions/action_types";

const likeCommentAction = {
  type: commentsActionTypes.LIKE_COMMENT,
  payload: { data: {}, data_id: 1 },

};

const likeCommenErrorAction = {
  type: commentsActionTypes.LIKE_COMMENT_ERROR,
  payload: {},

};

const initialState = {
  comment: {},
};

describe("UserReactionsReducer tests", () => {
  it("should handle LIKE_COMMENTS by adding the comment liked message to the state", () => {
    expect(LikeReducer(initialState, likeCommentAction)).toEqual({
      ...initialState,
      comment: { data: {}, data_id: 1 },
    });
  });
     
  it("should handle LIKE_COMMENTS_ERROR by adding an error message to the state", () => {
    const newInitialState = {
      error: {},
    };
    expect(LikeReducer(newInitialState, likeCommenErrorAction)).toEqual({
      ...newInitialState,
      error: {},
    });
  });

});
