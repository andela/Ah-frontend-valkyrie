import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import expect from "expect";
import * as actions from "../articleActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const articles = {
  articles: [
    {
      slug: "test-article-1",
      title: "Test Article",
      body: "This is a test article",
      tagList: ["test", "article"],

    },
  ],
  articlesCount: 10,
  links: {
    next: "",
    previous: "",
  },
};

describe("Article actions", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("creates FETCH_ARTICLES after successfuly fetching articles", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: articles,
      });
    });

    const expectedActions = [
      { type: "FETCH_ARTICLES", payload: articles },
    ];

    const store = mockStore({ articles: {} });

    return store.dispatch(actions.fetchArticles()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
