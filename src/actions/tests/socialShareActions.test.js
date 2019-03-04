import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import moxios from "moxios";
import * as actions from "../socialShareActions";
import setAuthToken from "../../utils/setAuthToken";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Actions", () => {
  it("should create a social share pending action", () => {
    const isSocialSharePending = true;
    const expectedAction = {
      type: actions.SOCIAL_SHARE_PENDING,
      isSocialSharePending,
    };
    expect(actions.socialSharePending(isSocialSharePending)).toEqual(expectedAction);
  });
  it("should create a social share success action", () => {
    const data = {
      link: "http://www.example.com",
      provider: "facebook",
    };
    const expectedAction = {
      type: actions.SOCIAL_SHARE_SUCCESS,
      data,
    };
    expect(actions.socialShareSuccess(data)).toEqual(expectedAction);
  });
  it("should create a social share error action", () => {
    const error = "Failed to get data";
    const expectedAction = {
      type: actions.SOCIAL_SHARE_ERROR,
      error,
    };
    expect(actions.socialShareError(error)).toEqual(expectedAction);
  });
});

describe("Social share async", () => {
  let store = mockStore({});
  beforeEach(() => {
    moxios.install;
    store = mockStore({ link: "", provider: "" });
  });
  afterEach(() => {
    moxios.uninstall;
  });
  it("shares an article on facebook", () => {
    const data = {
      link: "some cool link",
      provider: "facebook",
    };
    const provider = "facebook";
    const slug = "this-is-a-cool-article";
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: data,
      });
    });
    const expectedAction = [
      {
        type: actions.SOCIAL_SHARE_SUCCESS,
        data,
      },
    ];
    store.dispatch(actions.share(provider, slug)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
