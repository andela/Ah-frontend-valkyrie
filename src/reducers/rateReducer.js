import { SET_RATE, SET_LOADING } from "../actions/types";

const initialState = {
  loading: false,
  rated: {},
};

const rateReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_LOADING:
    return {
      ...state,
      loading: true,
    };
  case SET_RATE:
    return {
      ...state,
      rated: action.payload,
      loading: false,
    };
  default:
    return state;
  }
};

export default rateReducer;
