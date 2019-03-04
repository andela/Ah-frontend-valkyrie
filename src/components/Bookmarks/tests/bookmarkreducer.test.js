import expect from "expect";
import bookmarkReducer from "../reducers/bookmarkReducer";
import BookmarkActionTypes from "../actions/actionTypes"

describe("bookmarkReducer", () => {
    const initialState = {
        bookmarks: [],
        error: null,
        unbookmark: null
    };

    it("should return initial state", () => {
        expect(
            bookmarkReducer(undefined, []),
        ).toEqual(initialState.bookmarks);
    });

    it("should handle ADD_BOOKMARK", () =>{
        const action = {
            type: BookmarkActionTypes.ADD_BOOKMARK,
        };
        expect(bookmarkReducer({}, action)).toEqual({})
    })

    it("should handle ADD_BOOKMARK_ERROR", () =>{
        const action = {
            type: BookmarkActionTypes.ADD_BOOKMARK_ERROR,
        };
        expect(bookmarkReducer({}, action)).toEqual({})
    })    

    it("should handle FETCH_BOOKMARKs", () =>{
        const action = {
            type: BookmarkActionTypes.FETCH_BOOKMARKS,
        };
        expect(bookmarkReducer({}, action)).toEqual({})
    })

    it("should handle FETCH_BOOKMARK_ERROR", () =>{
        const action = {
            type: BookmarkActionTypes.FETCH_BOOKMARKS_ERROR,
        };
        expect(bookmarkReducer({}, action)).toEqual({})
    })

    it("should handle DELETE_BOOKMARK", () =>{
        const action = {
            type: BookmarkActionTypes.DELETE_BOOKMARK,
        };
        expect(bookmarkReducer({}, action)).toEqual({})
    })

    it("should handle DELETE_BOOKMARK_ERROR", () =>{
        const action = {
            type: BookmarkActionTypes.DELETE_BOOKMARK_ERROR,
        };
        expect(bookmarkReducer({}, action)).toEqual({})
    })
})
