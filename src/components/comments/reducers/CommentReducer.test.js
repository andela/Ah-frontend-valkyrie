import commentReducer from './commentReducer';
import commentsActionTypes from '../actions/action_types';

const commentOne = {
  comment:
    {
      comment: {
        id: 1,
        body: 'this is the first test comment',
      },
    },
};

const commentTwo = {
  comment: {
    results: [
      {
        id: 2,
        body: 'this is the second test comment',
      },
    ],
  },
};

const commentThree = {
  comment: {
    results: [
      {
        id: 2,
        body: 'this is the second test comment',
      },
      {
        id: 4,
        body: 'this is an edited test comment',
      },
    ],
  },
};

const editedComment = {
  comment: {
    id: 1,
    body: 'this is the first test comment',
  },
};

const initialState = {
  comments: [],
};

const fetchCommentsAction = {
  type: commentsActionTypes.FETCH_COMMENTS,
  payload: commentThree,
};

const addCommentAction = {
  type: commentsActionTypes.ADD_COMMENT,
  payload: commentOne,

};

const deleteCommentAction = {
  type: commentsActionTypes.DELETE_COMMENT,
  payload: commentOne.id,

};

const editCommentAction = {
  type: commentsActionTypes.EDIT_COMMENT_SUCCESS,
  payload: editedComment,

};

describe( 'Comment Reducers', () => {
  it( 'should handle ADD_COMMENT by inserting a comment into state', () => {
    expect( commentReducer( initialState, addCommentAction ) ).toEqual( {
      ...initialState,
      comments: [ commentOne.comment.comment ],
    } );
  } );

  it( 'should handle DELETE_COMMENT by removing a comment from state', () => {
    expect( commentReducer( initialState, deleteCommentAction ) ).toEqual( {
      ...initialState,
      comments: [],
    } );
  } );

  it( 'should handle EDIT_COMMENT by modifying a comment in state', () => {
    const state = commentReducer( initialState, addCommentAction );
    expect( commentReducer( state, editCommentAction ) ).toEqual( {
      // ...state,
      comments: [ editedComment.comment ],
    } );
  } );

  it( 'should handle FETCH_COMMENTS by inserting all existing comments into state', () => {
    expect( commentReducer( initialState, fetchCommentsAction ) ).toEqual( {
      ...initialState,
      comments: commentThree.comment.results,
    } );
  } );
} );
