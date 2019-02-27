import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import PageItem from "../pageItem";

describe("App", () => {
  const props = {
    label: "some label",
    clicked: jest.fn(),

  };
  it("should render without crashing", () => {
    const component = shallow(<PageItem {...props} />);
    expect(component).toMatchSnapshot();
  });
});
