import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import Landing from "./Landing";

describe("Test create article form component", () => {
  const props = {};

  const wrapper = shallow(<Landing {...props} />);

  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
