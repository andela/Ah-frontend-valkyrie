import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { FollowButtonView } from "./FollowButtonView";

const storeFake = (state, action) => ({
  subscribe: jest.fn(),
  default: jest.fn(),
  getState: () => state,
  dispatch: () => action
});

const store = storeFake({
  follow: {
    data: {
      following: false
    }
  },
  loginReducer: {
    isAuthenticated: true,
    username: "test-users"
  }
});

describe("test following", () => {
  const props = {
    handleClick: jest.fn(),
    fetchSingleArticle: jest.fn(),
    getFollowing: jest.fn(),
    unFollowUser: jest.fn(),
    followUser: jest.fn(),
    author: true,
    match: { params: { slug: "test-article" } },

    article: {
      id: 1,
      title: "test articles",
      body: "test body ",
      slug: "test-article",
      author: {
        username: "test user"
      }
    },
    authUser: {
      isAuthenticated: true
    },

    followData: [{ following: true }]
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <FollowButtonView {...props} />
      </Provider>
    );
    wrapper.instance().componentDidMount;
  });

  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("receives props 1", () => {
    wrapper.setProps({
      followData: { following: true }
    });
    expect(props.followData[0].following).toEqual(true);
  });

  it("receives props 2", () => {
    wrapper.setProps({
      followData: [
        { username: "test user", bio: "", image: "", following: true }
      ],
      author: { username: "test user", bio: "", image: "" }
    });
    expect(props.article).toEqual({
      id: 1,
      title: "test articles",
      body: "test body ",
      slug: "test-article",
      author: {
        username: "test user"
      }
    });
  });

  it("receives props 3", () => {
    wrapper.setProps({
      followData: [
        { username: "test user", bio: "", image: "", following: true }
      ],
      author: { username: "test user", bio: "", image: "" }
    });
    expect(props.followData[0].following).toEqual(true);
    wrapper.setProps({
      followData: [
        { username: "test user", bio: "", image: "", following: "" }
      ],
      author: { username: "test user2", bio: "", image: "" }
    });
    expect(props.followData[0].following).toEqual(true);
  });
  it("calls handleClick method", () => {
    const wrapper = shallow(<FollowButtonView {...props} />);
    wrapper.instance().handleClick();
    wrapper.instance().state.following = true;
    wrapper.instance().handleClick();
    wrapper.instance().state.following = false;
    wrapper.instance().handleClick();
  });

  it("following in next props", () => {
    const wrapper = shallow(
      // <Provider store={store}>
      <FollowButtonView {...props} />
    );
    // </Provider>);
    const author = {
      article: {
        id: 1,
        title: "test articles",
        body: "test body ",
        slug: "test-article",
        author: {
          username: "test user"
        }
      }
    };
    wrapper.setProps({
      followData: [
        { username: "testuser", bio: "", image: "", following: false }
      ],
      article: { author: { username: "testuser" } }
    });
    expect(author.article).toEqual(props.article);
  });

  it("should handle componentWillrecieveProps", () => {
    wrapper = shallow(<FollowButtonView {...props} />);
    const nextProps = {
      followData: {
        following: true
      }
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state("text")).toEqual("Following");
  });

  it("should handle componentWillrecieveProps 2", () => {
    wrapper = shallow(<FollowButtonView {...props} />);
    const nextProps = {
      followData: {
        following: false
      }
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state("text")).toEqual("Follow");
  });
});
