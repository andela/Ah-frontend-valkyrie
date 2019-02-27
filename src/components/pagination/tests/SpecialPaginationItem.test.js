import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import SpecialPaginationItem from "../specialPageItem";

describe("App", () => {
  const props = {
    arialLabel: "some label",
    clicked: jest.fn(),
    icon: "some icon string",
  };
  it("should render without crashing", () => {
    const component = shallow(<SpecialPaginationItem {...props} />);
    expect(component).toMatchSnapshot();
  });
});
