import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import moxios from "moxios";
import bookmarkActionTypes from "../actions/actionTypes"
import * as bookmark_actions from "../actions/bookmark_actions"

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const articleSlug = "learn-map-filter-and-reduce-in-javascript";
const bookmark_id = 1;

describe("bookmark articles", () => {
   beforeEach(() => {
       moxios.install;
   });
   afterEach(()=>{
       moxios.uninstall;
   });

   it("should bookmark articles", () =>{
       const bookmark = [{
           id: 1,
           article:{}}
       ]
       moxios.wait(()=>{
           const req = moxios.requests.mostRecent();
           req.respondWith({
               status: 201,
               response: bookmark,
           });
       });

       const expectedAction = [
           {
               type: bookmarkActionTypes.ADD_BOOKMARK,
               bookmark,
           },
       ];
       const store = mockStore({});
       store.dispatch(bookmark_actions.bookmarkAction(articleSlug)).then(() => {
           expect(store.getActions()).toEqual(expectedAction);
        });
   });

   it("should get bookmark articles", () =>{
    const bookmark = [{
        id: 1,
        article:{}}
    ]
    moxios.wait(()=>{
        const req = moxios.requests.mostRecent();
        req.respondWith({
            status: 200,
            response: bookmark,
        });
    });

    const expectedAction = [
        {
            type: bookmarkActionTypes.FETCH_BOOKMARKS,
            bookmark,
        },
    ];
    const store = mockStore({});
    store.dispatch(bookmark_actions.getBookmarks(articleSlug)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
     });
});

    it("should unbookmark articles", () =>{
        const unbookmark = [
            {
                "article": "learn map filter and reduce in javascript",
                "slug": articleSlug,
                "status": "unbookmarked"

            }
        ]
        moxios.wait(()=>{
            const req = moxios.requests.mostRecent();
            req.respondWith({
                status: 200,
                response: unbookmark,
            });
        });

        const expectedAction = [
            {
                type: bookmarkActionTypes.DELETE_BOOKMARK,
                unbookmark,
            },
        ];
        const store = mockStore({});
        store.dispatch(bookmark_actions.unBookmark(articleSlug, bookmark_id )).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it("should create an action for bookmark", ()=> {
        const bookmark = []
        const expectedAction = {
            type : bookmarkActionTypes.ADD_BOOKMARK,
            payload : bookmark
        };
        expect(bookmark_actions.bookmarkArticle(bookmark)).toEqual(expectedAction)
    });

    it("should create an action for bookmark error", () => {
        const error = null ;
        const expectedAction = {
            type : bookmarkActionTypes.ADD_BOOKMARK_ERROR,
            payload : error,
        };
        expect(bookmark_actions.bookmarkArticleError(error)).toEqual(expectedAction)
    });

    it("should create an action for getting bookmarks", ()=> {
        const bookmark = []
        const expectedAction = {
            type : bookmarkActionTypes.FETCH_BOOKMARKS,
            payload : bookmark
        };
        expect(bookmark_actions.fetchBookmarks(bookmark)).toEqual(expectedAction)
    });

    it("should create an action for getting an error when getting bookmarks", ()=> {
        const error = null
        const expectedAction = {
            type : bookmarkActionTypes.FETCH_BOOKMARKS_ERROR,
            payload : error
        };
        expect(bookmark_actions.fetchBookmarksError(error)).toEqual(expectedAction)
    });

    it("should create an action for unbookmarking article", ()=> {
        const unbookmark = null
        const expectedAction = {
            type : bookmarkActionTypes.DELETE_BOOKMARK,
            payload : unbookmark
        };
        expect(bookmark_actions.deleteBookmark(unbookmark)).toEqual(expectedAction)
    });

    it("should create an action for unbookmarking errror", ()=> {
        const error = null
        const expectedAction = {
            type : bookmarkActionTypes.DELETE_BOOKMARK_ERROR,
            payload : error
        };
        expect(bookmark_actions.deleteBookmarkError(error)).toEqual(expectedAction)
    });
});
