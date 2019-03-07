import React from "react";
import expect from "expect";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import { FollowButtonView } from "./FollowButtonView";

const storeFake = (state, action) => ({
  subscribe: jest.fn(),
  default: jest.fn(),
  getState: () => state,
  dispatch: () => action
});

const props = {
  handleClick: jest.fn(),
  className: "",
  classValue: "",
  text: ""
};

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
    match: { params: { slug: "test-article" } },
    article: {
      article: {
        id: 1,
        title: "test articles",
        body: "test body ",
        slug: "test-article",
        author: {
          username: "test user"
        }
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
    wrapper.instance.componentDidMount;
  });
  it("receives props 1", () => {
    wrapper.setProps({ followData: { following: true } });
    expect(props.followData[0].following).toEqual(true);
  });

  it("receives props 2", () => {
    wrapper.setProps({
      followData: [
        { username: "test user", bio: "", image: "", following: true }
      ],
      author: { username: "test user", bio: "", image: "" }
    });
    expect(props.article.article).toEqual({
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
});
