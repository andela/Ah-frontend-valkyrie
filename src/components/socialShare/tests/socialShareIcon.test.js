import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import SocialShareIcon from "../SocialShareIcon";


describe("<SocialShareIcon/>", () => {
  const props = {
    provider: "twitter",
    clicked: jest.fn(),
    className: "",
  };
  const component = shallow(<SocialShareIcon {...props} />);

  it("should render without crashing", () => {
    expect(component).toMatchSnapshot();
  });
});
