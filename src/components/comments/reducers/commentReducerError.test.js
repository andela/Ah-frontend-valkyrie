import commentReducer from './commentReducer';
import commentsActionTypes from '../actions/action_types';

const error = {};

const initialState = {
  error: null,
};

const addCommentErrorAction = {
  type: commentsActionTypes.ADD_COMMENT_ERROR,
  payload: error,

};

const deleteCommentErrorAction = {
  type: commentsActionTypes.DELETE_COMMENT_ERROR,
  payload: error,

};

const editCommentErrorAction = {
  type: commentsActionTypes.EDIT_COMMENT_ERROR,
  payload: error,

};

describe( 'Test Comment Reducer', () => {
  it( 'should handle add comment error by inserting an error into state', () => {
    expect( commentReducer( initialState, addCommentErrorAction ) ).toEqual( {
      ...initialState,
      error: error,
    } );
  } );

  it( 'should handle delete comment error by inserting an error into state', () => {
    expect( commentReducer( initialState, deleteCommentErrorAction ) ).toEqual( {
      ...initialState,
      error: error,
    } );
  } );

  it( 'should handle edit comment error by inserting an error into state', () => {
    expect( commentReducer( initialState, editCommentErrorAction ) ).toEqual( {
      ...initialState,
      error: error,
    } );
  } );
} );
