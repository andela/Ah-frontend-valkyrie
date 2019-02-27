import React from "react";
import expect from "expect";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import ChangePassword from "./change_password";

const storeFake = (state, action) => ({
  subscribe: jest.fn(),
  default: jest.fn(),
  getState: () => state,
  dispatch: () => action,
});
const props = {
  changePasswordAction: jest.fn(),
  match: {
    params: {},
  },
};

const store = storeFake({
  passwordResetReducer:
    {
      user: {},
      message: "",
    },
});

describe("change password functionality", () => {
  const wrapper = mount(
    <Provider store={store}>
      <ChangePassword {...props} />
    </Provider>);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("handles state on submit", () => {
    const url = window.location;
    const arr = url.toString().split("/");
    const form = wrapper.find("#changePasswordForm");
    form.simulate("submit");
    expect(window.location.href).toEqual(`${arr[0]}//${arr[2]}/`);
  });

  it("handles state on change", () => {
    const event = { target: { name: "", value: "" } };
    const textField = wrapper.find(".form-control").first();
    const yoo = textField.simulate("change", event);
    expect(textField.instance().value).toEqual(event.target.value);
  });
});
