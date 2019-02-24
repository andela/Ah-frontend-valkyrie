import expect from 'expect';
import commentsActionTypes from './action_types';
import * as actions from './actions';

describe( 'Comment Actions', () => {
  it( 'should dispatch FETCH_COMMENTS after successfuly fetching comments', () => {
  
    const comments = [];
    const expectedAction = {
      type: commentsActionTypes.FETCH_COMMENTS,
      payload: comments,
    };
    expect( actions.fetchCommentsSuccess( comments ) ).toEqual( expectedAction );
  } );

  it( 'should dispatch FETCH_COMMENTS_ERROR on error when fetching comments', () => {
    const err = {};
    const expectedAction = {
      type: commentsActionTypes.FETCH_COMMENTS_ERROR,
      payload: err,
    };
    expect( actions.fetchCommentsFailure( err ) ).toEqual( expectedAction );
  } );

  it( 'should dispatch ADD_COMMENT on successfully posting comment', () => {
    const comment = {
      body: 'comment test body',
    };

    const expectedAction = {
      type: commentsActionTypes.ADD_COMMENT,
      payload: comment,
    };
    expect( actions.addCommentsSuccess( comment ) ).toEqual( expectedAction );
  } );

  it( 'should dispatch ADD_COMMENT_ERROR on error when posting a comment fails', () => {
    const errors = {};

    const expectedAction = {
      type: commentsActionTypes.ADD_COMMENT_ERROR,
      payload: errors,
    };
    expect( actions.addCommentsFailure( errors ) ).toEqual( expectedAction );
  } );

  it( 'should dispatch DELETE_COMMENT on clicking delete', () => {
    const id = 2;

    const expectedAction = {
      type: commentsActionTypes.DELETE_COMMENT,
      payload: id,
    };
    expect( actions.deleteCommentSuccess( id ) ).toEqual( expectedAction );
  } );
  it( 'should dispatch DELETE_COMMENT_ERROR on error when deleting a comment', () => {
    const errors = {};

    const expectedAction = {
      type: commentsActionTypes.DELETE_COMMENT_ERROR,
      payload: errors,
    };
    expect( actions.deleteCommentFailure( errors ) ).toEqual( expectedAction );
  } );

  it( 'should dispatch EDIT_COMMENT_SUCCESS on successfully editing a comment', () => {
    const comment = {
      body: 'edit comment test body',
    };

    const expectedAction = {
      type: commentsActionTypes.EDIT_COMMENT_SUCCESS,
      payload: comment,
    };
    expect( actions.editCommentSuccess( comment ) ).toEqual( expectedAction );
  } );

  it( 'should dispatch EDIT_COMMENT_ERROR on error when editing a comment fails', () => {
    const errors = {};

    const expectedAction = {
      type: commentsActionTypes.EDIT_COMMENT_ERROR,
      payload: errors,
    };
    expect( actions.editCommentFailure( errors ) ).toEqual( expectedAction );
  } );
} );
