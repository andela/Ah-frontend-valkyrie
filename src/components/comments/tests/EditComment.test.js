import React from "react";
import { shallow } from "enzyme";
import { EditComment } from "../EditComment";

describe("<Edit comment component />", () => {
  let mockComponent;
  const props = {
    articleSlug: "new-article-slug",
    commentId: 1,
    commentBody: "",
    editComment: jest.fn(),
  };
  const event = {
    target: {
      value: "change value",
    },
  };
  beforeEach(() => {
    mockComponent = shallow(<EditComment {...props} />);
  });
  it("renders as expected", () => {
    expect(mockComponent).toMatchSnapshot();
  });
  it("handle onChange", () => {
    mockComponent.instance().setState = jest.fn();

    mockComponent.instance().handleOnChange(event);

    expect(mockComponent.instance().setState).toBeCalled();
  });

  it("handle submit", () => {
    const event = {
      preventDefault: jest.fn(),
    };

    mockComponent.instance().handleSubmit(event);
    expect(props.editComment).toBeCalled();
  });
});
