import React from "react";
import { shallow } from "enzyme";
import { Comment } from "../CommentList";

const mockCommentOne = {
  id: 78,
  body: "fake body",
  author: {
    username: "tester",
  },
  createdAt: "Mon-25-Feb-2019",
};

const props = {
  comments: [{}],
  fetchComments: jest.fn(),
  articleSlug: "",
};

const articleSlug = "test-article-slug";

describe("<Comment />", () => {
  let mockComponent;
  beforeEach(() => {
    mockComponent = shallow(<Comment {...props} />);
    mockComponent.defaultProps = { articleSlug };
  });

  it("renders as expected ", () => {
    expect(mockComponent).toMatchSnapshot();
  });

  it("should receive next props", () => {
    mockComponent.instance().componentWillReceiveProps({ comments: [mockCommentOne] });
    expect(mockComponent.state("comments")).toEqual([mockCommentOne]);
  }),

  it("should mount component", () => {
    mockComponent.instance().componentDidMount();
    expect(props.fetchComments).toBeCalled();
  });

});
