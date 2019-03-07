import React from "react";
import { shallow } from "enzyme";
import UserButton from "./UserButton";

const props = {
  handleClick: jest.fn(),
  text: "",
  classValue: "",
  canFollow: false
};

describe("test follow button", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UserButton {...props} />);
  });
  it("should render follow button", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
