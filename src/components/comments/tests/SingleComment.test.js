import React from "react";
import { shallow } from "enzyme";
import { SingleComment } from "../SingleComment";

describe("<Single Comment />", () => {
  let mockComponent;
  const props = {
    toggleForm: "d-none",
    authUser: {
      isAuthenticated: true,
      user: {
        username: "testUsername",
      },
    },
    deleteComment: jest.fn(),
    onClickEditArticle: jest.fn(),
  };
  beforeEach(() => {
    mockComponent = shallow(<SingleComment {...props} />);
  });

  it("renders as expected", () => {
    expect(mockComponent).toMatchSnapshot();
  });

  it("onclick handler performs as expected", () => {
    mockComponent.setState({ toggleForm: "d-block" });
    mockComponent.instance().shouldToggleForm();
    expect(mockComponent.state("toggleForm")).toBe("d-none");
  }),
  it("handle submit", () => {
    mockComponent.instance().handleOnDelete();
  });
  it("handle onclick", () => {
    mockComponent.instance().onClickEditArticle();
  });
  it("Display comment history", () => {
    const initialState = {
      toggleForm: "d-none",
      showHistory: false,
    };
    mockComponent.setState(initialState);
    mockComponent.instance().handleCommentHistory();
    expect(mockComponent.state("showHistory")).toBe(true);
  });
  it("Display the confirmation dialog", () => {
    const initialState = {
      toggleForm: "d-none",
      showHistory: false,
    };
    mockComponent.setState(initialState);
    mockComponent.instance().confirmationDialog();
  });
});
