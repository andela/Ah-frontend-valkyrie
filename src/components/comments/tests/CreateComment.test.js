import React from "react";
import { shallow } from "enzyme";
import { CreateComment } from "../CreateComment";

describe("<Create comment component />", () => {
  let mockComponent;
  const props = {
    articleSlug: "new-article-slug",
    addComment: jest.fn(),
  };
  const event = {
    target: {
      value: "what a value",
    },
  };
  beforeEach(() => {
    mockComponent = shallow(<CreateComment {...props} />);
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
      target: {
        value: "another value",
      },
      preventDefault: jest.fn(),
    };
    mockComponent.setProps({
      event: {
        target: {
          value: "radnom commen",
        },
      },
    });

    mockComponent.instance().handleOnSubmit(event);
    expect(props.addComment).toBeCalled();
  });
});
