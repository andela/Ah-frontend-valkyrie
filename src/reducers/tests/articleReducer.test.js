import articleReducer from "../articleReducer";

describe("articleReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      articles: [],
      errors: [],
      searchArticles: [],
      searchArticleError: [],
      deletedArticle: "",
    };
    expect(articleReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle FETCH_ARTICLES", () => {
    expect(articleReducer([], {
      type: "FETCH_ARTICLES",
      payload: [{ id: 1, slug: "some-slug" }],
    })).toEqual(
      {
        articles: [{ id: 1, slug: "some-slug" }],
      },
    );
  });
  it("should handle FETCH_ARTICLES_ERROR", () => {
    expect(articleReducer([], {
      type: "FETCH_ARTICLES_ERROR",
      payload: [{ errors: "some errors" }],
    })).toEqual(
      {
        errors: [{ errors: "some errors" }],
      },
    );
  });
  it("should handle SEARCH_ARTICLES", () => {
    expect(articleReducer([], {
      type: "SEARCH_ARTICLES",
      payload: [{ id: "article 1" }],
    })).toEqual(
      {
        searchArticles: [{ id: "article 1" }],
      },
    );
  });
  it("should handle SEARCH_ARTICLE_ERROR", () => {
    expect(articleReducer([], {
      type: "SEARCH_ARTICLE_ERROR",
      payload: [{ error: "some bad error" }],
    })).toEqual(
      {
        searchArticleError: [{ error: "some bad error" }],
      },
    );
  });
  it("should handle ADD_ARTICLE", () => {
    expect(articleReducer([], {
      type: "ADD_ARTICLE",
      payload: [{ id: "some article" }],
    })).toEqual(
      {
        articles: [{ id: "some article" }],
      },
    );
  });
  it("should handle ADD_ARTICLE_ERROR", () => {
    expect(articleReducer([], {
      type: "ADD_ARTICLE_ERROR",
      payload: [{ error: "some bad error" }],
    })).toEqual(
      {
        errors: [{ error: "some bad error" }],
      },
    );
  });
  it("should handle DELETE_ARTICLE_ERROR", () => {
    expect(articleReducer([], {
      type: "DELETE_ARTICLE_ERROR",
      payload: [{ error: "some error" }],
    })).toEqual(
      {
        errors: [{ error: "some error" }],
      },
    );
  });
});
