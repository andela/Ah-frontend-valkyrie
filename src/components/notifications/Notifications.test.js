import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Test Footer component", () => {
  const props = {
    notifications: [
      {
        id: 1,
        actor: "tester",
        verb: "new follower",
        unread: true,
      },
      {
        id: 2,
        actor: "tester2",
        verb: "new follower",
        unread: false,
      },
    ],
    authUser: {
      isAuthenticated: true,
    },
    markAsReadHandler: jest.fn(),
  };
  const wrapper = shallow(<Notifications {...props} />);
  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
