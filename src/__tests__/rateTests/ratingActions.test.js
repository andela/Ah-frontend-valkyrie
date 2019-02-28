import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { rateArticle } from "../../actions/rating/ratingActions";
import { SET_RATE, GET_ERRORS } from "../../actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Rate article actions", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it("Rates an article", () => {
    const expectedResponse = {
      rated: {
        message: "Article rating successful",
        rating: {
          id: 4,
          points: 3,
          rater: 2,
          article: 5,
        },
      },
    };
    const slug = "This-is-my-article";
    const points = 3;
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        expectedResponse,
      });
    });
    store.dispatch(rateArticle(slug, points)).then((response) => {
      expect(response.type).toEqual(SET_RATE);
      expect(response.payload.rated.message).toBe("Article rating successful");
      expect(response.payload.rated.rating).toEqual({
        id: 4,
        points: 3,
        rater: 2,
        article: 5,
      });
    });
  });

  it("Rates an article failure", () => {
    const slug = "This-is-my-article";
    const expectedResponse = {
      errors: {
        message: "You cannot rate your own article",
      },
    };
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 403,
        expectedResponse,
      });
    });
    store.dispatch(rateArticle(slug, null)).then((response) => {
      expect(response.type).toBe(GET_ERRORS);
      expect(response.payload.errors.message).toBe("You cannot rate your own article");
    });
  });
});
