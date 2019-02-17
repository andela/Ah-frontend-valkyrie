import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import ProfileNav from "../ProfileNav";

describe("Edit profile view", () => {
  let wrapper;
  const props = {
    profile: {
      username: "",
      first_name: "",
      last_name: "",
      bio: "",
      image: "",
    },
    isEditAvailable: false,
    onClickEdit: false,
    onClickClose: false,
    newStateAvailable: false,
  };

  const profile = {
    username: "testUser",
    first_name: "Test",
    last_name: "User",
    bio: "Tester",
    image: "",
  };

  it("Should render edit view", () => {
    wrapper = shallow(<ProfileNav {...props} profile={profile} />);
    expect(wrapper.find("h5").props().children).toBe("Tester");
  });
});
