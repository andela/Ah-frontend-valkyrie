import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import actionTypes from "./actionTypes";
import { resetPasswordAction, passwordResetSuccess, passwordResetFail } from "./ResetPasswordLinkAction";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("reset password", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("should mock fetch api", () => {
    const store = mockStore({ user: {} });
    fetchMock.postOnce(
      "http://127.0.0.1:8000/api/v1/users/reset_password",
      {
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          email: "liliannabunya2@gmail.com",
        },
      },
    );
    store.dispatch(resetPasswordAction());
    expect(store.getActions()).toEqual([]);
  });

  it("should fetch email successfuly", () => {
    const message = "A password reset email has been sent to your email account!";
    const expectedActions = {
      type: actionTypes.PASSWORD_RESET_SUCCESS,
      payload: message,
    };
    expect(passwordResetSuccess(message)).toEqual(expectedActions);
  });

  it("should not fetch email successfuly ", () => {
    const error = "Not found.";
    const expectedActions = {
      type: actionTypes.PASSWORD_RESET_FAILED,
      payload: error,
    };
    expect(passwordResetFail(error)).toEqual(expectedActions);
  });
});
