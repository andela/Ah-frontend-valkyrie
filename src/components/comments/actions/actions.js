import commentsActionTypes from './action_types';
import * as api from '../../utils/http';

const commentsUrl = 'articles/';
// synchronous actions
export const fetchCommentsSuccess = comments => (
  {
    type: commentsActionTypes.FETCH_COMMENTS,
    payload: comments,
  }
);

export const fetchCommentsFailure = error => (
  {
    type: commentsActionTypes.FETCH_COMMENTS_ERROR,
    payload: error,
  }
);

export const addCommentsSuccess = comment => (
  {
    type: commentsActionTypes.ADD_COMMENT,
    payload: comment,
  }
);

export const addCommentsFailure = error => (
  {
    type: commentsActionTypes.ADD_COMMENT_ERROR,
    payload: error,
  }
);

export const deleteCommentSuccess = message => (
  {
    type: commentsActionTypes.DELETE_COMMENT,
    payload: message,
  }
);

export const deleteCommentFailure = error => (
  {
    type: commentsActionTypes.DELETE_COMMENT_ERROR,
    payload: error,
  }
);

export const editCommentSuccess = editedComment => (
  {
    type: commentsActionTypes.EDIT_COMMENT_SUCCESS,
    payload: editedComment,
  }
);

export const editCommentFailure = error => (
  {
    type: commentsActionTypes.EDIT_COMMENT_ERROR,
    payload: error,
  }
);
// asynchronous actions with AJAX API requests
export const fetchComments = slug => ( dispatch ) => {
  return api.getResource( `${ commentsUrl }${ slug }/comments/` )
    .then( ( response ) => {
      dispatch( fetchCommentsSuccess( response.data ) );
    } )
    .catch( ( err ) => {
      dispatch( fetchCommentsFailure( err.response ) );
    } );
};

export const addComment = ( slug, comment ) => ( dispatch ) => {
   return api.createResource( `${ commentsUrl }${ slug }/comments/`, comment )
    .then( ( response ) => {
      dispatch( addCommentsSuccess( response.data ) );
    } )
    .catch( ( err ) => {
      dispatch( addCommentsFailure( err.response ) );
    } );
};

export const deleteComment = ( slug, id ) => ( dispatch ) => {
   return api.removeResource( `${ commentsUrl }${ slug }/comments/${ id }` )
    .then( ( ) => {
      const message = `comment ${ id } has been successfully deleted`;
      dispatch( deleteCommentSuccess( { message, id } ) );
    } )
    .catch( ( err ) => {
      dispatch( deleteCommentFailure( err.response.data.detail ) );
    } );
};

export const editComment = ( slug, id, commentToEdit ) => ( dispatch ) => {
   return api.updateResource( `${ commentsUrl }${ slug }/comments/${ id }`, commentToEdit )
    .then( ( response ) => {
      dispatch( editCommentSuccess( { response, commentToEdit, id } ) );
    } )
    .catch( ( err ) => {
      dispatch( editCommentFailure( err.response.data.errors.body ) );
    } );
};