import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import ShowNotification from "./ShowNotification";

describe("Test Footer component", () => {
  const props = {
    notification: {
      id: 1,
      actor: "tester",
      verb: "new follower",
      unread: true,
    },
    accordonKey: 0,
  };
  const wrapper = shallow(<ShowNotification {...props} />);
  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
