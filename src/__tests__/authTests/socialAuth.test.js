import React from "react";
import { shallow } from "enzyme";
import expect from "expect";
import SocialAuth from "../../components/auth/social/SocialAuth";
import setAuthToken from "../../utils/setAuthToken";
import isEmpty from "../../validations/isEmpty";
import errorReducer from "../../reducers/errorReducer";
import { GET_ERRORS } from "../../actions/types";

describe("Login component", () => {
  const props = {
    socialLogin: jest.fn(),
  };
  it("Renders the component without crashing", () => {
    const component = shallow(<SocialAuth {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("Should set the Authorization header", () => {
    const token = false;
    expect(setAuthToken(token)).toEqual(false);
  });
  it("Should return true given an empty object, false otherwise", () => {
    const obj = {
      username: "Baker",
      email: "baker@andela.com",
    };
    expect(isEmpty({})).toEqual(true);
    expect(isEmpty(obj)).toEqual(false);
  });
  it("Should dispatch error", () => {
    const initialState = {
      errors: {},
    };
    const action = {
      type: GET_ERRORS,
      payload: { username: "Required field" },
    };
    const expectedState = {
      errors: { username: "Required field" },
    };
    expect(errorReducer(initialState, action)).toEqual(expectedState);
  });
});
