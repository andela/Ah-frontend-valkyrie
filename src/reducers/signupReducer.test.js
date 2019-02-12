import actionTypes from "../actions/actionTypes";
import signupReducer from "./signupReducer";

const initialState = {
  user: {},
  errors: {}
};

describe("test signup reducer", () => {
  it("should return the initial state unknown action type", () => {
    expect(signupReducer(undefined, {})).toEqual(initialState);
  });
  
  it("should return the initial state on SIGNUPFAIL type", () => {
    const type = actionTypes.SIGNUPFAIL;
    expect(
      signupReducer([], {
        type: type,
        payload: { user: { username: "", email: "", password: "" } }
      })
    ).toEqual({
      errors: {
        user: {
          email: "",
          password: "",
          username: ""
        }
      }
    });
  });
  it("should return new state on SIGNUPSUCCESS type", () => {
    const newUser = {
      username: "araalifarooq",
      email: "farooq@gmeil.com",
      password: "Araali@1"
    };
    expect(
      signupReducer(undefined, {
        type: actionTypes.SIGNUPSUCCESS,
        payload: newUser
      })
    ).toMatchObject({ user: newUser });
  });
});
