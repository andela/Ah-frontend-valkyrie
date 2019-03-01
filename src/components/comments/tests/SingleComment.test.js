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

    mockComponent.setState({ toggleForm: "d-none" });
    mockComponent.instance().shouldToggleForm();
    expect(mockComponent.state("toggleForm")).toBe("d-block");
  }),

  it("handle submit", () => {
    mockComponent.instance().handleOnDelete();
  });

  it("handle onclick", () => {
    mockComponent.instance().onClickEditArticle();
  });
});
