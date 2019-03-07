import React from "react";
import { shallow } from "enzyme";
import { Subscribe } from "../notify";

describe("<Subscribe component />", () => {
  const props = {
    mailList: jest.fn(),
    fetchMailList: jest.fn(),
    subscribeUnsubscribe: jest.fn(),
    authUser: {
      isAuthenticated: true,
      user: {
        username: "testUser",
      },
    },
  };

  const state = {
    toggle: true,
    isUserSubscribed: false,
  };

  const wrapper = shallow(<Subscribe {...props} />);
  wrapper.setState(state);

  it("Should mount component", () => {
    wrapper.instance().componentDidMount();
    expect(props.fetchMailList).toHaveBeenCalled();
  });

  it("handle onChange", () => {
    wrapper.instance().handleOnChange();
    expect(props.subscribeUnsubscribe).toHaveBeenCalled();
    expect(wrapper.state("toggle")).toEqual(false);
  });

  it(" Should receive props", () => {
    const nextProps = {
      mailList: {
        results: [
          {
            recieve_email_notifications: false,
            recieve_push_notifications: true,
            user: {
              username: "testUser",
            },
          },
        ],
      },
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state("toggle")).toEqual(true);
    expect(wrapper.state("isUserSubscribed")).toEqual(true);
  });
});
