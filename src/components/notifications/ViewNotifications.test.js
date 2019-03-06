import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import { ViewNotifications } from "./ViewNotifications";

describe("Test nav bar component", () => {
  const props = {
    notifications: {
      notifications: {
        count: 0,
        notifications: [
          {
            id: 1,
            actor: "tester",
            verb: "new follower",
            unread: true,
          },
        ],
      },
    },
    authUser: {
      isAuthenticated: true,
    },
    fetchNotifications: jest.fn(),
    markNotificationAsRead: jest.fn(),
  };
  const state = {
    notifications: [],
    markAsReadResponse: jest.fn(),
    fetching: true,
    notificationsCount: 0,
  };

  const wrapper = shallow(<ViewNotifications {...props} />);
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
    const response = {
      count: 0,
      notifications: [],
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state("notifications")).toEqual(response);
  });

  it("Should receive props on mark as read", () => {
    const nextProps = {
      notifications: {
        count: 0,
        notifications: [],
      },
      markAsRead: {
        message: "test successful",
      },
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state("markAsReadResponse")).toEqual(nextProps.markAsRead);
  });

  it("Should handle mark all as read", () => {
    wrapper.instance().markAsReadHandler();
    expect(props.markNotificationAsRead).toHaveBeenCalled();
  });
});
