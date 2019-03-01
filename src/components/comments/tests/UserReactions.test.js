import React from "react";
import { shallow } from "enzyme";
import { Like } from "../UserReactions";

describe("<Like />", () => {
  let mockComponent;
  const props = {
    comment: {
      comment_likes: { count: 2 },
      comment_dislikes: { count: 0 },
      id: 1,
    },
    likesCount: 5,
    dislikeCount: 5,
    response: "",
    commentResponse: {
      data: {
        message: "comment liked",
      },
    },
    authUser: {
      isAuthenticated: true,
      user: {
        username: "testUsername",
      },
    },
    toLikeComment: jest.fn(),
    likeCommentHandler: jest.fn(),
  };

  beforeEach(() => {
    mockComponent = shallow(<Like {...props} />);
  });

  it("renders as expected", () => {
    expect(mockComponent).toMatchSnapshot();
  });

  it("handle onclick", () => {
    mockComponent.instance().likeCommentHandler();
  });

  it("should receive next props over comment liked message", () => {
    const nextProps = {
      commentResponse: {
        data: {
          message: "comment liked",
        },
        data_id: 1,
      },
    };
    mockComponent.instance().componentWillReceiveProps(nextProps);
    expect(mockComponent.state("likesCount")).toEqual(3);
    expect(mockComponent.state("dislikesCount")).toEqual(0);
  });

  it("should receive next props over comment disliked message", () => {
    const nextProps = {
      commentResponse: {
        data: {
          message: "comment disliked",
        },
        data_id: 1,
      },
    };
    mockComponent.instance().componentWillReceiveProps(nextProps);
    expect(mockComponent.state("likesCount")).toEqual(1);
    expect(mockComponent.state("dislikesCount")).toEqual(1);
  });

  it("should receive next props over changed id's", () => {
    const nextProps = {
      commentResponse: {
        data: {
          message: "comment disliked",
        },
        data_id: 3,
      },
    };
    mockComponent.instance().componentWillReceiveProps(nextProps);
  });
});
