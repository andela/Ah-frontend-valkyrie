import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Test Footer component", () => {
  const wrapper = shallow(<Footer />);
  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
