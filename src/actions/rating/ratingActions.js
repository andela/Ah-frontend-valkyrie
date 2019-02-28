import axios from "axios";
import { getErrors } from "../index";
import { SET_RATE } from "../types";

const host = process.env.HOST;

export const rateArticle = (slug, points) => (dispatch) => {
  const data = { points };
  return axios
    .post(`${host}/articles/${slug}/rating`, data)
    .then(response => dispatch({
      type: SET_RATE,
      payload: response.data,
    }),
    )
    .catch(error => dispatch(getErrors(error.response.data)));
};
