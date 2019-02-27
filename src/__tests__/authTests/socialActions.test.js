import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import { socialLogin, handleServerResponse } from "../../actions/socialActions";
import { SET_LOGIN_SUCCESS } from "../../actions/loginActions";
import { GET_ERRORS } from "../../actions/types";
import { jwtToken } from "../../components/auth/social/sampleToken";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Social login action", () => {
  beforeEach(() => {
    moxios.install;
  });
  afterEach(() => {
    moxios.uninstall;
  });
  it("Should GET_ERRORS if google returns an invalid token", () => {
    const token = "bbjcjjadggxjjjHGSJkjjsbxbkJNKBhubxjnn";
    const error = {
      response: {
        data: "Invalid or expired token. Please login again.",
      },
    };
    moxios.wait(() => {
      moxios.requests.mostRecent().respondWith({
        status: 500,
        error,
      });
    });
    const expectedAction = GET_ERRORS;
    const store = mockStore({});
    store.dispatch(socialLogin(token, "google.com")).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it("Should GET_ERRORS if facebook returns an invalid token", () => {
    const token = "gfhjkKJHGKBDKJJDHIDFLKKMVHGGHGVJhfhjcdjjkjjJKNKLHLjnkjxbjvx";
    const error = {
      response: {
        data: "Invalid or expired token. Please login again.",
      },
    };
    moxios.wait(() => {
      moxios.requests.mostRecent().respondWith({
        status: 500,
        error,
      });
    });
    const expectedAction = GET_ERRORS;
    const store = mockStore({});
    store.dispatch(socialLogin(token, "facebook.com")).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});

describe("Handle server response", () => {
  const expectedResponse = {
    type: SET_LOGIN_SUCCESS,
    user: {
      email: "mukungu@andela.com",
      exp: 1551124106,
      iat: 1551037706,
      id: 3,
      username: "Mukungu",
    },
  };
  const data = {
    data: {
      user: {
        auth_token: jwtToken,
      },
    },
  };
  it("Should SET_LOGIN_SUCCESS", () => {
    const store = mockStore({});
    expect(store.dispatch(handleServerResponse(data))).toEqual(expectedResponse);
  });
});
