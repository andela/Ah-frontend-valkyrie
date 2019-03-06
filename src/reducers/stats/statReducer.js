import StatActionTypes from "../../actions/stats/actionTypes";

export const initialState = {
  stats: [],
  error: null,
};


const statReducer = (state = initialState.stats, action) => {
  switch (action.type) {
  case StatActionTypes.FETCH_STATS:
    return {
      ...state,
      stats: action.payload,
    };
  case StatActionTypes.FETCH_STATS_ERROR:
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default statReducer;
