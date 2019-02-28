import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import { SearchArticle } from "../SearchArticle";

describe("Test article component", () => {
  const props = {
    fetchSearchArticle: jest.fn(),
    fetchArticles: jest.fn(),
  };
  const state = {
    searchKey: "all",
    searchTerm: "",
    searching: true,
    searchError: "",
    searchedArticles: {},
    sidebarArticles: [],
    isLoading: false,
  };
  const wrapper = shallow(<SearchArticle {...props} />);
  wrapper.setState(state);

  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should handle on change", () => {
    const event = {
      target: {
        name: "searchTerm",
        value: "somevalue",
      },
    };
    wrapper.instance().onChangeHandler(event);
    expect(wrapper.state("searchTerm")).toEqual("somevalue");
  });

  it("should handle on submit", () => {
    const event = {
      preventDefault: jest.fn(),
    };
    wrapper.instance().onSubmitHandler(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it("Should receive props", () => {
    const nextProps = {
      searchedArticles: {
        results: [
          {
            id: 1,
            title: "test article",
            body: "test body",
            slug: "test-article",
          },
        ],
      },
      sidebarArticles: {
        articles: [
          {
            id: 1,
            title: "test article",
            body: "test body",
            slug: "test-article",
          },
        ],
      },
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state("isLoading")).toEqual(false);
  });
});
