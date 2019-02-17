import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import EditProfileForm from "../EditProfileForm";

describe("Edit profile view", () => {
  let wrapper;
  const props = {
    profile: {
      username: "test",
      image: "",
      bio: "",
      first_name: "Test",
      last_name: "",
    },
    onSubmit: jest.fn(),
    changed: jest.fn(),
  };

  const profile = {
    username: "testUser",
    first_name: "Test",
    last_name: "User",
    bio: "Tester",
    image: "",
  };

  it("Should render Edit Profile view", () => {
    wrapper = shallow(<EditProfileForm {...props} profile={profile} />);
    expect(wrapper.find("[name=\"firstName\"]").props().value).toBe("Test");
  });
});
