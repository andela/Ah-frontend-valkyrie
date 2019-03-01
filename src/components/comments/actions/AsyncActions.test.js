import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import moxios from "moxios";
import * as actions from "../actions/actions";
import commentsActionTypes from "./action_types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe("Async functions", () => {
  beforeEach(() => {
    moxios.install;
  });
  afterEach(() => {
    moxios.uninstall;
  });

  it("is successful on fetching comments", () => {
    const comments = [
      {
        id: 2,
        body: "this is a test body",
      },
    ];
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: comments,
      });
    });
    const expectedAction1 = [{
      type: commentsActionTypes.FETCH_COMMENTS,
      comments,
    }];

    store.dispatch(actions.fetchComments("test-comment-1")).then(() => {});
  }),

  it("should add comment", () => {
    const comment = {
      id: 3,
      body: "Sample comment",
    };

    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 201,
        response: comment,
      });
    });
    const expectedAction2 = [{
      type: commentsActionTypes.ADD_COMMENT,
      comment,
    }];
    store.dispatch(actions.addComment("Cool-comment", "This is a cool comment")).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  }),

  it("should edit comment", () => {
    const editedComment = {
      id: 3,
      body: "Sample comment edited",
    };
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: comment,
      });
    });
    const expectedAction3 = [{
      type: commentsActionTypes.EDIT_COMMENT_SUCCESS,
      editedComment,
    }];
    store.dispatch(actions.editComment("what a cool comment", 3)).then(() => {
      expect(store.getActions()).toEqual(expectedAction3);
    });
  }),
  it("should delete comment", () => {
    const commentToDelete = {
      id: 2,
      body: "this is a test body",
    };
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 204,
        response: comment,
      });
    });
    const message = "comment 2 has been successfully deleted";
    const expectedAction = [{
      type: commentsActionTypes.DELETE_COMMENT,
      message,
    }];

    store.dispatch(actions.deleteComment("we-should-delete", 2)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
