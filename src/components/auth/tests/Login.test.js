import React from "react";
import expect from "expect";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import Login from "../Login";

const storeFake = (state, action) => ({
  subscribe: jest.fn(),
  default: jest.fn(),
  getState: () => state,
  dispatch: () => action,
});

const store = storeFake({
  loginReducer: {
    isLoginPending: false,
    loginSuccess: {},
    loginError: "",
    isAuthenticated: false,
  },
});

describe("Login functionality", () => {
  const props = { isLoginPending: false, loginError: "" };
  const loginWrapper = mount(
    <Provider store={store}>
      <Login {...props} />
    </Provider>,
  );
  it("Login should render correctly", () => {
    const component = loginWrapper;
    expect(component).toMatchSnapshot();
  });

  it("handles the state changes on the Login Form", () => {
    const emailField = loginWrapper.find(".form-control").first();
    emailField.value = "testuser@app.com";
    const event = { target: { name: "testName", value: "testValue" } };
    emailField.simulate("change", event);
    expect(emailField.value).toEqual("testuser@app.com");
  });

  it("handles submit", () => {
    const form = loginWrapper.find("#login-form");
    form.simulate("submit");
    const { protocol, host } = window.location;
    expect(window.location.href).toEqual(`${protocol}//${host}/`);
  });
});
