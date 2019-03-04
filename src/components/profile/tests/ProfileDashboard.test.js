import React from "react";
import expect from "expect";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { shallow } from "enzyme";
import { ProfileDashboard } from "../ProfileDashboard";

const mockStore = configureMockStore([thunk]);

const event = {
  preventDefault: jest.fn(),
};
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
  bookmarks: [],
  fetchProfile: jest.fn(),
  updateProfile: jest.fn(),
  changelistener: jest.fn(),
  onClickEdit: jest.fn(),
  onClickClose: jest.fn(),
  onSubmit: jest.fn(),
};

let Store;
const wrapper = shallow(<ProfileDashboard {...props} />);
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
      bookmarks: [],
    });
  });

  it("should render correctly", () => {
    expect(wrapper.find(".first")).toBeDefined();
  });

  it("should receive props", () => {
    wrapper.setProps(props);
  });

  it("should edit", () => {
    const instance = wrapper.instance();
    instance.onClickEdit(event);
  });

  it("should close form", () => {
    const instance = wrapper.instance();
    instance.onClickClose(event);
  });

  it("should submit form", () => {
    const instance = wrapper.instance();
    wrapper.setState({ isEditAvailable: true });
    jest.spyOn(instance, "onSubmit");
    instance.onSubmit(event);
  });
});
