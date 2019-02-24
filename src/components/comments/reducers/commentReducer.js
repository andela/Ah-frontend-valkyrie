import commentsActionTypes from '../actions/action_types';

export const initialState = {
  comments: [],
  error: null,
};

const commentReducer = ( state = initialState.comments, action ) => {
  switch ( action.type ) {
    case commentsActionTypes.FETCH_COMMENTS:
      return Object.assign(
        {}, state, { comments: action.payload.comment.results },
      );

    case commentsActionTypes.ADD_COMMENT:
      return Object.assign(
        {}, state, { comments: [ action.payload.comment.comment, ...state.comments ] },
      );

    case commentsActionTypes.ADD_COMMENT_ERROR:
      return Object.assign(
        {}, state, { error: action.payload },
      );

    case commentsActionTypes.DELETE_COMMENT: {
      return Object.assign(
        {}, state, { comments: state.comments.filter( comment => comment.id !== action.payload.id ) },
      );
    }

    case commentsActionTypes.DELETE_COMMENT_ERROR:
      return Object.assign(
        {}, state, { error: action.payload },
      );

    case commentsActionTypes.EDIT_COMMENT_SUCCESS: {
      return Object.assign(
        {}, state, { comments: state.comments.map( comment => ( comment.id == action.payload.id ? { ...comment, body: action.payload.commentToEdit.comment.body } : comment ) ) },
      );
    }

    case commentsActionTypes.EDIT_COMMENT_ERROR:
      return Object.assign(
        {}, state, { error: action.payload },
      );

    default:
      return state;
  }
};

export default commentReducer;
