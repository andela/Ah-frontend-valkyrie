
//Sample actions

export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';

export const fetchArticlesSuccess = articles =>
  ({ type: FETCH_ARTICLES_SUCCESS, payload: articles });
