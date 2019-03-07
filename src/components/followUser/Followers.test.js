import React from "react";
import { mount } from "enzyme";
import { mapStateToProps, Followers, imageShow } from "./Followers";
import avatar from "../../assets/images/img_avatar.png";

const props = {
  bio: "",
  image: "",
  username: ""
};

const initialState = {
  follow: {
    followers: [
      {
        username: "farooq",
        email: "",
        bio: ""
      }
    ]
  },
  followData: {
    following: false
  }
};

describe("test followers view", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Followers {...props} />);
  });
  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("renders followers page", () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it("it receives props", () => {
    wrapper.setProps({ followers: [] });
    expect(wrapper.state("followers")).toEqual([]);
  });
  it("receives props 1", () => {
    wrapper.setProps({
      followers: [
        { username: "farooq", email: "farooq@email.com", bio: "software dev" }
      ]
    });
    expect(wrapper.state("followers")).toEqual([
      { username: "farooq", email: "farooq@email.com", bio: "software dev" }
    ]);
    wrapper.setProps({ followData: { following: false } });
    expect(initialState.followData.following).toEqual(false);
  });
  it("should map state to props", () => {
    expect(mapStateToProps(initialState).followers[0].username).toEqual(
      "farooq"
    );
  });
  it("shows followers image", () => {
    expect(imageShow("")).toEqual(avatar);
    expect(imageShow("image_url")).toEqual("image_url");
  });
});
