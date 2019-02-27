import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import * as likeActions from "../likeArticleActions";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const articleSlug = "learn-map-filter-and-reduce-in-javascript";
const like = {
  like: {
    article: "",
    like: {},
    user: "",
    modified_at: "",
  },
};


describe("Like Actions", () => {
  it("should create an action like Dislike Article", () => {
    const expectedAction = {
      type: likeActions.LIKE_DISLIKE_ARTICLE,
      payload: { like },
    };
    expect(likeActions.likeDislikeArticleSuccess(like)).toEqual(expectedAction);
  });

  it("should create an action like dislike failure", () => {
    const error = {};
    const expectedAction = {
      type: likeActions.LIKE_DISLIKE_FAILURE,
      payload: { error },
    };
    expect(likeActions.likeDislikeFailure(error)).toEqual(expectedAction);
  });
});

describe("Test Like Article", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  it("tests user can like article", () => {
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: { like },
      });
    });

    const expectedAction = [{
      type: likeActions.LIKE_DISLIKE_ARTICLE,
      payload: { like },
    }];

    const store = mockStore({});
    store.dispatch(likeActions.likeDislikeArticle(articleSlug, true)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it("tests user can dislike article", () => {
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: { like },
      });
    });

    const expectedAction = [{
      type: likeActions.LIKE_DISLIKE_ARTICLE,
      payload: { like },
    }];

    const store = mockStore({});
    store.dispatch(likeActions.likeDislikeArticle(articleSlug, false)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
