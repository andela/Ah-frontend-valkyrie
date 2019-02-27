import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import UpdateArticleForm from "../UpdateArticleForm";

describe("Test article component", () => {
  const props = {
    handleOnSubmit: jest.fn(),
    handleOnChange: jest.fn(),
    handleEditor: jest.fn(),
    article: {
      description: "test article description",
      title: "test article",
      body: "test body ",
      slug: "test-article",
      tagList: ["test"],
    },
  };
  const wrapper = shallow(<UpdateArticleForm {...props} />);

  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
