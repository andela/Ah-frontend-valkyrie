import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import { SocialShare } from "../SocialShare";


describe("<SocialShare/>", () => {
  const props = {
    slug: "this-is-a-slug",
    share: jest.fn(),
    authUser: { isAuthenticated: true },
  };
  const wrapper = shallow(<SocialShare {...props} />);

  it("should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should handle a click", () => {
    const event = {
      target: {
        getAttribute: jest.fn(),
      },
    };
    wrapper.instance().clickHandler(event);
    expect(event.target.getAttribute).toHaveBeenCalled();
  });
});
