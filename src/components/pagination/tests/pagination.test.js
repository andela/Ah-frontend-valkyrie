import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import Pagination from "../Pagination";


describe("App", () => {
  const props = {
    goToFirst: jest.fn(),
    goToLast: jest.fn(),
    goToNext: jest.fn(),
    goToPrevious: jest.fn(),
  };
  it("should render without crashing", () => {
    const component = shallow(<Pagination {...props} />);
    expect(component).toMatchSnapshot();
  });
});
