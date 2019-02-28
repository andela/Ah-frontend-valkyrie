import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import SearchArticleData from "../SearchArticleData";

describe("Test create article form component", () => {
  const props = {
    searching: true,
    searchkey: "",
    searchTerm: "",
    articles: [
      {
        id: 1,
        title: "some text",
      },
    ],
  };

  const wrapper = shallow(<SearchArticleData {...props} />);

  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });


  it("Matches the snapshot when searching completes", () => {
    wrapper.setProps({ searching: false });
    expect(wrapper).toMatchSnapshot();
  });
});
