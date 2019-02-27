import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import SearchArticleForm from "../SearchArticleForm";

describe("Test create article form component", () => {
  const props = {
    onChangeHandler: jest.fn(),
    onSubmitHandler: jest.fn(),
  };

  const wrapper = shallow(<SearchArticleForm {...props} />);

  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
