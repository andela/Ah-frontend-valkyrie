import React from "react";
import expect from "expect";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import ProfileDashboardTest, { ProfileDashboard } from "../ProfileDashboard";

const mockStore = configureMockStore([thunk]);

const props = {
  profile: {
    username: "test",
    image: "",
    bio: "",
    first_name: "Test",
    last_name: "",
  },
  loading: false,
  error: null,
  fetchProfile: jest.fn(),
  updateProfile: jest.fn(),
  changelistener: jest.fn(),
};

let Store;
let wrapper;
describe("Dashboard testing", () => {
  beforeEach(() => {
    Store = mockStore({
      profile: {
        profile: {
          username: "testUser",
          first_name: "Test",
          last_name: "User",
          bio: "Tester",
          image: "",
        },
      },
    });
    wrapper = mount(
      <Provider store={Store}>
        <ProfileDashboardTest {...props} />
      </Provider>,
    );
  });

  it("should render correctly", () => {
    expect(wrapper.find(".first")).toBeDefined();
  });

  it("should receive props", () => {
    wrapper = mount(<ProfileDashboard {...props} />);
    wrapper.setProps(props);
  });

  it("should edit", () => {
    wrapper = mount(<ProfileDashboard {...props} />);
    const instance = wrapper.instance();
    jest.spyOn(instance, "onClickEdit");
    wrapper.find("#edit-link-btn").simulate("click");
  });

  it("should close form", () => {
    wrapper = mount(<ProfileDashboard {...props} />);
    const instance = wrapper.instance();
    jest.spyOn(instance, "onClickClose");
    wrapper.find("#close-link-btn").simulate("click");
  });

  it("should submit form", () => {
    wrapper = mount(<ProfileDashboard {...props} />);
    const instance = wrapper.instance();
    wrapper.setState({ isEditAvailable: true });
    jest.spyOn(instance, "onSubmit");
    wrapper.find("#submit-btn").simulate("click");
  });
});
