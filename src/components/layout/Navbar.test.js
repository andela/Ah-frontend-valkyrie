import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import { Navbar } from "./Navbar";

describe("Test nav bar component", () => {
  const props = {
    notifications: {
      count: 0,
      notifications: [],
    },
    logout: jest.fn(),
    authUser: {
      isAuthenticated: true,
    },
    fetchNotifications: jest.fn(),
  };
  const state = {
    notifications: [],
  };

  const wrapper = shallow(<Navbar {...props} />);
  wrapper.setState(state);

  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("Should mount component", () => {
    wrapper.instance().componentDidMount();
    expect(props.fetchNotifications).toHaveBeenCalled();
  });
  it("Should receive props", () => {
    const nextProps = {
      notifications: {
        count: 0,
        notifications: [],
      },
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state("notifications")).toEqual([]);
  });
  it("Should handle logout", () => {
    wrapper.instance().logoutHandler();
    expect(props.logout).toHaveBeenCalled();
  });
});
