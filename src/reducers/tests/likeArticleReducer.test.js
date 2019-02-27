import likeDislikeArticleReducer from "../likeArticleReducer";
import * as likeActions from "../../actions/likeArticleActions";

describe("like article reducer", () => {
  const like = {
    article: 74,
  };

  it("should handle LIKE DISLIKE ARTICLE", () => {
    const action = {
      type: likeActions.LIKE_DISLIKE_ARTICLE,
      payload: { like },
    };
    const response = {
      count: 1,
      like: {
        like: {
          article: 74,
        },
      },
    };
    expect(likeDislikeArticleReducer({}, action)).toEqual(response);
  });

  it("should handle LIKE DISLIKE FAILURE", () => {
    const error = {};

    const action = {
      type: likeActions.LIKE_DISLIKE_FAILURE,
      payload: { error },
    };

    expect(likeDislikeArticleReducer({}, action)).toEqual({
      error: { error: {} },
    });
  });
});
