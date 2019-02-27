import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import ProfileTabs from "../ProfileTabs";

const wrapper = shallow(<ProfileTabs />);
describe("Profile Tabs testing", () => {
  it("should render correctly", () => {
    expect(wrapper.find(".tab-content")).toBeDefined();
  });
});
