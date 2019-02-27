import React from "react";
import expect from "expect";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { shallow } from "enzyme";
import { LikeArticle } from "../LikeArticle";

const mockStore = configureMockStore([thunk]);

const props = {
  authUser: {
    isAuthenticated: true,
    user: {
      username: 'testuser',
    },
  },
  liked: null,
  disliked: null,
  likesCount: 0,
  dislikesCount: 0,
  usersWhoLiked: ['testuser'],
  usersWhoDisliked: ['testuser'],
  currentUser: "",
  handleClick: jest.fn(),
  preventDefault: jest.fn(),
  likeDislikeArticle: jest.fn(),
};

let Store;
const wrapper = shallow(<LikeArticle {...props} />);
describe("Like Article testing", () => {
  beforeEach(() => {
    Store = mockStore({
      like: {},
      error: {},
      count: 0,
      authUser: {
        isAuthenticated: true,
      },
    });
  });

  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly", () => {
    expect(wrapper.find(".fa-thumbs-up")).toBeDefined();
  });

  it('Should mount component and like article', () => {
    wrapper.instance().componentDidMount();
    const state = {
      usersWhoLiked: {
        includes: jest.fn(),
      },
      liked: true,
    };
    wrapper.setState(state);
    expect(wrapper.state('liked')).toEqual(true);
  });

  it('Should mount component and dislike article', () => {
    wrapper.instance().componentDidMount();
    const state = {
      usersWhoDisliked: {
        includes: jest.fn(),
      },
      disliked: true,
    };
    wrapper.setState(state);
    expect(wrapper.state('disliked')).toEqual(true);
  });

  it('Should handle like click and set dislike to true', () => {
    const state = {
      liked: null,
    };
    const event = {
      preventDefault: jest.fn(),
      target: { id: "like-btn" },
    };
    wrapper.setState(state);
    wrapper.instance().handleClick(event);
    expect(wrapper.state('disliked')).toEqual(true);
  });

  it('Should handle like click and update dislike', () => {
    const state = {
      liked: null,
    };
    const event = {
      preventDefault: jest.fn(),
      target: { id: "like-btn" },
    };
    wrapper.setState(state);
    wrapper.instance().handleClick(event);
    expect(wrapper.state('disliked')).toEqual(true);
  });

  it('Should handle dislike click and set update like', () => {
    const state = {
      liked: true,
      disliked: null,
    };
    const event = {
      preventDefault: jest.fn(),
      target: { id: "dislike-btn" },
    };
    wrapper.setState(state);
    wrapper.instance().handleClick(event);
    expect(wrapper.state("liked")).toEqual(true);
  });

  it("should receive props", () => {
    const state = {
      liked: true,
    };
    const nextProps = {
      likesCount: 1,
    };
    wrapper.setState(state);
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state('likesCount')).toEqual(1);
  });
});
