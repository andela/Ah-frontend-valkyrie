import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import { ReadingStats } from "../ReadingStats";

const props = {
  getStats: jest.fn(),
  authUser: {
    isAuthenticated: true,
    user: {
      username: "testuser",
    },
  },
};

const state = {
  stats: [],
  statsResultError: false,
};

describe("bookmark article functionality", () => {
  const wrapper = shallow(<ReadingStats {...props} />);
  it("matches the snapshot", () => {
    wrapper.setState(state);
    expect(wrapper).toMatchSnapshot();
  });

  it("handles recieves props", () => {
    const nextProps = {
      statsResultError: true,
      stats: {
        results: [],
      },
    };
    wrapper.setState({ statsResultError: true });
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state("statsResultError")).toEqual(true);
  });

  it("handles recieves props with error", () => {
    const nextProps = {
      statsError: true,
      stats: {
        results: [],
      },
    };
    wrapper.setState({ statsError: true });
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state("statsError")).toEqual(true);
  });
});
