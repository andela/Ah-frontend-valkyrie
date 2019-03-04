import BookmarkActionTypes from '../actions/actionTypes'

export const initialState = {
    bookmarks: [],
    error: null,
    unbookmark: null
};

const bookmarkReducer = (state = initialState.bookmarks, action) => {
    switch(action.type){
        case BookmarkActionTypes.ADD_BOOKMARK:
        return{
            ...state,
            bookmarks: action.payload,
        };
        case BookmarkActionTypes.ADD_BOOKMARK_ERROR:
           return{
               ...state,
               error: action.payload,
           };
        case BookmarkActionTypes.FETCH_BOOKMARKS:
        return{
            ...state,
            bookmarks: action.payload,
        };
        case BookmarkActionTypes.FETCH_BOOKMARKS_ERROR:
            return{
                ...state,
                error: action.payload,
            };   
        case BookmarkActionTypes.DELETE_BOOKMARK:
        return{
            ...state,
            unbookmark: action.payload,
        };
        case BookmarkActionTypes.DELETE_BOOKMARK_ERROR:
            return{
                ...state,
                error: action.payload,
            };    
        default:
            return state;
    }
};

export default bookmarkReducer;
