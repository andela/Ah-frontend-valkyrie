//A test article reducer. This can be deleted and replaced with a real article reducer

import { FETCH_ARTICLES_SUCCESS } from '../actions/index';

const initialState = {
  articles: [],
};
const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload.articles,
      };

    default:
      return state;
  }
};

export default articlesReducer;
