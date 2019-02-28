import * as api from '../components/utils/http';

const articleUrl = 'articles/';

export const fetchArticlesSuccess = articles => (
  {
    type: 'FETCH_ARTICLES',
    payload: articles,
  }
);

export const fetchArticlesFailure = errors => (
  {
    type: 'FETCH_ARTICLES_ERROR',
    payload: errors,
  }
);

export const addArticlesSuccess = article => (
  {
    type: 'ADD_ARTICLE',
    payload: article,
  }
);

export const addArticlesFailure = errors => (
  {
    type: 'ADD_ARTICLE_ERROR',
    payload: errors,
  }
);

export const deleteArticleSuccess = message => (
  {
    type: 'DELETE_ARTICLE',
    payload: message,
  }
);

export const deleteArticleFailure = errors => (
  {
    type: 'DELETE_ARTICLE_ERROR',
    payload: errors,
  }
);

export const editArticleSuccess = editedArticle => (
  {
    type: 'EDIT_ARTICLE_SUCCESS',
    payload: editedArticle,
  }
);

export const editArticleFailure = errors => (
  {
    type: 'EDIT_ARTICLE_ERROR',
    payload: errors,
  }
);

export const fetchArticles = () => ( dispatch ) => {
  api.getResource( articleUrl )
    .then( ( response ) => {
      dispatch( fetchArticlesSuccess( response.data ) );
    } )
    .catch( ( err ) => {
      dispatch( fetchArticlesFailure( 'Cannot find this article' ) );
    } );
};

export const fetchSingleArticle = slug => ( dispatch ) => {
  api.getSingleResource( `${ articleUrl }${ slug }/` )
    .then( ( response ) => {
      dispatch( fetchArticlesSuccess( response.data ) );
    } )
    .catch( ( err ) => {
      dispatch( fetchArticlesFailure( err.response ) );
    } );
};

export const fetchSearchArticle = (term, key = null) => (dispatch) => {
  let url = `articles/search?search=${term}`;
  if (key !== null) {
    url = `articles/search?search=${term}&search_key=${key}`;
  }
  api.getResource(url)
    .then((response) => {
      dispatch(
        {
          type: "SEARCH_ARTICLES",
          payload: response.data,
        },
      );
    })
    .catch((err) => {
      dispatch(
        {
          type: "SEARCH_ARTICLE_ERROR",
          payload: err.response,
        },
      );
    });
};

export const addArticle = article => ( dispatch ) => {
    api.createResource( articleUrl, article )
    .then( ( response ) => {
      dispatch( addArticlesSuccess( response.data ) );
    } )
    .catch( ( err ) => {
      dispatch( addArticlesFailure( err.response ) );
    } );
};

export const deleteArticle = slug => ( dispatch ) => {
  api.removeResource( `${ articleUrl }${ slug }/` )
    .then( ( res ) => {
      dispatch( deleteArticleSuccess( 'success' ) );
    } )
    .catch( ( err ) => {
      dispatch( deleteArticleFailure( err.response ) );
    } );
};

export const updateArticle = ( slug, articleToEdit ) => ( dispatch ) => {
  api.updateResource( `${ articleUrl }${ slug }/`, articleToEdit )
    .then( ( response ) => {
      dispatch( editArticleSuccess( response.data ) );
    } )
    .catch( ( err ) => {
      dispatch( editArticleFailure( err.response ) );
    } );
};
