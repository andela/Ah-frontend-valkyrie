import React from "react";
import expect from "expect";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import ResetPassword from "./reset_password";
import { resetPasswordAction } from "../../actions/ResetPasswordLinkAction";

const storeFake = (state, action) => ({
  subscribe: jest.fn(),
  default: jest.fn(),
  getState: () => state,
  dispatch: () => action,
  resetPasswordAction: jest.fn(),

});
const props = {
  resetPasswordAction: jest.fn(),
};

const store = storeFake({
  passwordResetReducer:
    {
      user: {},
      message: "",
    },
});

describe("reset password functionality", () => {
  const wrapper = mount(
    <Provider store={store}>
      <ResetPassword {...props} />
    </Provider>);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("handles state on submit", () => {
    const url = window.location;
    const arr = url.toString().split("/");
    const form = wrapper.find("#resetPasswordForm");
    form.simulate("submit");
    expect(window.location.href).toEqual(`${arr[0]}//${arr[2]}/`);
  });

  it("handles state on change", () => {
    const event = { target: { name: "testname", value: "testvalue" } };
    const textField = wrapper.find(".form-control").first();
    textField.simulate("change", event);
    expect(textField.instance().value).toEqual("testvalue");
  });
});
