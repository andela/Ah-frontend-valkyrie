import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import actionTypes from "./actionTypes";
import { signupSuccess, signUp, signupFail } from "./SignupAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("signup actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("should mock fetch api", () => {
    const store = mockStore({ user: {} });
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetchMock.postOnce(
      proxyurl +
        "http://ah-backend-valkyrie-staging.herokuapp.com/api/v1/users/register",
      {
        headers: {
          "content-type": "application/json"
        },
        body: {
          user: {
            username: "araalifarooq",
            email: "farooq@gmail.com",
            password: "Araali@12"
          }
        }
      }
    );
    store.dispatch(signUp());
    expect(store.getActions()).toEqual([]);
  });

  it("should fetch SIGNUPSUCESS on registering new user", () => {
    const response =
      "An activation link has been sent to your email.Follow the link to activate your account";

    const expectedActions = [
      {
        type: actionTypes.SIGNUPSUCCESS,
        payload: response
      }
    ];
    const store = mockStore({ user: {} });
    store.dispatch(signupSuccess(response));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should fetch SIGNUPFAILURE on failing to register new user ", () => {
    const failAction = [
      {
        type: actionTypes.SIGNUPFAIL,
        payload: "email arleady exists"
      }
    ];
    const emailError = "email arleady exists";
    const store = mockStore({ user: {} });
    store.dispatch(signupFail(emailError));
    expect(store.getActions()).toEqual(failAction);
  });
});
