import axios from "axios";
import { fetchSingleArticle } from "./articleActions";

export const LIKE_DISLIKE_ARTICLE = "LIKE_DISLIKE_ARTICLE";
export const LIKE_DISLIKE_FAILURE = "LIKE_DISLIKE_FAILURE";

const host = process.env.HOST;

export const likeDislikeArticleSuccess = like => ({
  type: LIKE_DISLIKE_ARTICLE,
  payload: { like },
});

export const likeDislikeFailure = error => ({
  type: LIKE_DISLIKE_FAILURE,
  payload: { error },
});

export const likeDislikeArticle = (slug, likeType) => (dispatch) => {
  let url = `${host}/articles/${slug}/like`;
  if (!likeType) {
    url = `${host}/articles/${slug}/dislike`;
  }
  return axios.post(url).then((response) => {
    dispatch(likeDislikeArticleSuccess(response.data));
    dispatch(fetchSingleArticle(slug));
  }).catch((error) => {
    dispatch(likeDislikeFailure(error.response.data));
  });
};
