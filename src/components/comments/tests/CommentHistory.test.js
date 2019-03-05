import React from "react";
import { shallow } from "enzyme";
import CommentHistory from "../CommentHistory";
import SingleCommentButtons from "../SingleCommentButtons";
import SingleComponent from "../SingleComment";

describe("Test CommentHistory component", () => {
  const props = {
    commentHistory: [
      {
        id: 100,
        body: "This is my first comment",
        created_at: "2019-03-06T09:15:29.592516Z",
      },
    ],
  };
  test("Renders component without failure", () => {
    const component = shallow(<CommentHistory {...props} />);
    expect(component).toMatchSnapshot();
  });
});

describe("Test SingleCommentButtons component", () => {
  const props = {
    confirmationDialog: jest.fn(),
    onClickEditArticle: jest.fn(),
    commentHistory: [
      {
        id: 100,
        body: "This is my first comment",
        created_at: "2019-03-06T09:15:29.592516Z",
      },
    ],
    handleCommentHistory: jest.fn(),
  };

  const component = shallow(<SingleCommentButtons {...props} />);
  it("Renders component without failure", () => {
    expect(component).toMatchSnapshot();
  });

  it("Renders button without errors", () => {
    const showHistory = component.find("[data-test='component-show-history']");
    expect(showHistory.length).toBe(1);
  });
});
