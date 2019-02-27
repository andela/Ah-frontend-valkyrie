import passwordResetReducer from "./passwordResetReducer";
import actionTypes from "../actions/actionTypes";

const newMessage = "A password reset email has been sent to your email account!";

const initialstate = {
  user: {},
  message: "",
  errors: {},
};

describe("Password reset reducer", () => {
  it("should handle initial state", () => {
    expect(passwordResetReducer(undefined, {})).toEqual(initialstate);
  });

  it("should handle reset password success", () => {
    const expectedAction = {
      type: actionTypes.PASSWORD_RESET_SUCCESS,
      payload: newMessage,
    };
    expect(passwordResetReducer(undefined, expectedAction)).toMatchObject({ message: newMessage });
  });

  it("should handle reset password failure", () => {
    const newMessage = { email: "" };

    const expectedAction = {
      type: actionTypes.PASSWORD_RESET_FAILED,
      payload: newMessage,
    };
    expect(passwordResetReducer(undefined, expectedAction)).toMatchObject({ message: newMessage });
  });
});
