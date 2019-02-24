export const initialState = {
  articles: [],
  errors: [],
};

const articleReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case 'FETCH_ARTICLES':
      return Object.assign(
        {}, state, { articles: action.payload },
      );

    case 'FETCH_ARTICLES_ERROR':
      return Object.assign(
        {}, state, { errors: action.payload },
    );

    case 'ADD_ARTICLE':
      return Object.assign(
        {}, { articles: action.payload },
      );

    case 'ADD_ARTICLE_ERROR':
      return Object.assign(
        {}, { errors: action.payload },
      );

    case 'DELETE_ARTICLE': {
      return Object.assign(
        {}, state, { deletedArticle: action.payload },
      );
    }

    case 'DELETE_ARTICLE_ERROR': {
      return Object.assign(
        {}, state, { errors: action.payload },
      );
    }

    case 'EDIT_ARTICLE_SUCCESS': {
      return Object.assign(
        {}, state, { articles: state.articles },
      );
    }

    default:
      return state;
  }
};

export default articleReducer;
