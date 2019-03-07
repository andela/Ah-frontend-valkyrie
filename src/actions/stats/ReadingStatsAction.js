import axios from "axios";
import StatActionTypes from "./actionTypes";

const setUrl = (authorUsername) => {
  const url = `${process.env.HOST}/articles/author/${authorUsername}/`;
  return url;
};

export const fetchStats = stats => (
  {
    type: StatActionTypes.FETCH_STATS,
    payload: stats,
  }
);

export const fetchStatsError = error => (
  {
    type: StatActionTypes.FETCH_STATS_ERROR,
    payload: error,
  }
);

export const getStats = authorUsername => (dispatch) => {
  const getUrl = setUrl(authorUsername);
  return axios(getUrl)
    .then((response) => {
      dispatch(fetchStats(response.data));
    },
    )
    .catch((error) => {
      dispatch(fetchStatsError(error.response));
    },
    );
};
