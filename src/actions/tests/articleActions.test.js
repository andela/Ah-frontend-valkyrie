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
  it("creates FETCH_SINGLE_ARTICLE after successfuly fetching an article", () => {
    const article = {
      slug: "test-article-1",
      title: "Test Article",
      body: "This is a test article",
      tagList: ["test", "article"],

    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: article.slug,
      });
    });

    const expectedActions = [
      { type: "FETCH_ARTICLES", payload: article.slug },
    ];

    const store = mockStore({ articles: {} });

    return store.dispatch(actions.fetchSingleArticle(article.slug)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("Non async Actions", () => {
  it("should create fetch articles failure action", () => {
    const errors = [{ error: "this is an error" }];
    const expectedAction = {
      type: "FETCH_ARTICLES_ERROR",
      payload: errors,
    };
    expect(actions.fetchArticlesFailure(errors)).toEqual(expectedAction);
  });
  it("should create add article success action", () => {
    const article = {
      id: 1,
      title: "my article",
    };
    const expectedAction = {
      type: "ADD_ARTICLE",
      payload: article,
    };
    expect(actions.addArticlesSuccess(article)).toEqual(expectedAction);
  });
  it("should create add article failure action", () => {
    const errors = [{ errors: "Failed to get data" }];
    const expectedAction = {
      type: "ADD_ARTICLE_ERROR",
      payload: errors,
    };
    expect(actions.addArticlesFailure(errors)).toEqual(expectedAction);
  });
  it("should test delete article action", () => {
    const message = "this is a test message";
    const expectedAction = {
      type: "DELETE_ARTICLE",
      payload: message,
    };
    expect(actions.deleteArticleSuccess(message)).toEqual(expectedAction);
  });
  it("should test delete action failure", () => {
    const errors = [{ errors: "Failed to get data" }];
    const expectedAction = {
      type: "DELETE_ARTICLE_ERROR",
      payload: errors,
    };
    expect(actions.deleteArticleFailure(errors)).toEqual(expectedAction);
  });
  it("should create edit article success action", () => {
    const article = {
      id: 1,
      title: "my article",
    };
    const expectedAction = {
      type: "EDIT_ARTICLE_SUCCESS",
      payload: article,
    };
    expect(actions.editArticleSuccess(article)).toEqual(expectedAction);
  });
  it("should test edit article failure", () => {
    const errors = [{ errors: "Failed to get data" }];
    const expectedAction = {
      type: "EDIT_ARTICLE_ERROR",
      payload: errors,
    };
    expect(actions.editArticleFailure(errors)).toEqual(expectedAction);
  });
});
