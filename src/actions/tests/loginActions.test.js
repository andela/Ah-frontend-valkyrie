import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import moxios from "moxios";

import * as actiontypes from "../loginActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  it("should create an action LoginSucess", () => {
    const user = { user: { email: "testuser@app.com", password: "myPass" } };
    const expectedAction = {
      type: actiontypes.SET_LOGIN_SUCCESS,
      user,
    };
    expect(actiontypes.loginSuccess(user)).toEqual(expectedAction);
  });

  it("should create an action loginError", () => {
    const loginError = "A user with this email and password was not found.";
    const expectedAction = {
      type: actiontypes.SET_LOGIN_ERROR,
      loginError,
    };
    expect(actiontypes.setLoginError(loginError)).toEqual(expectedAction);
  });
});

describe("login async actions", () => {
  beforeEach(() => {
    moxios.install;
  });
  afterEach(() => {
    moxios.uninstall;
  });
  it("SETS_LOGIN_SUCCESS after fetching the API data", () => {
    const user = {
      user: {
        email: "testuser@app.com",
        password: "mypass",
      },
    };
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: user,
      });
    });
    const expectedAction = [{
      type: actiontypes.SET_LOGIN_SUCCESS,
      user,
    }];
    const store = mockStore({});
    store.dispatch(actiontypes.login()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
