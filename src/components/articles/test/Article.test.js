import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import { Article } from "../Article";
import paginationUtils from "../../../utils/paginationUtils";

describe("Test article component", () => {
  const props = {
    articles: {
      id: 1,
      title: "test article",
      body: "test body ",
      slug: "test-article",
    },
    target: {
      classList: {
        add: jest.fn(),
      },
    },
    fetchArticles: jest.fn(),
    fetchPaginationArticles: jest.fn(),

  };
  const wrapper = shallow(<Article {...props} />);

  wrapper.setState({
    articles: props.articles, articlesCount: 50, next: "SomeUrl", previous: null,
  });

  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Should receive props", () => {
    const nextProps = {
      articles: {
        articles: [
          {
            id: 1,
            title: "test article",
            body: "test body",
            slug: "test-article",
          },
        ],
        links: {
          next: "some link",
          previous: "previous link",
        },
        articlesCount: 10,
      },
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state("isLoading")).toEqual(false);
  });
  it("tests going to a specific page", () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        classList: {
          add: jest.fn(),
        },
      },
    };
    wrapper.instance().goToSpecificPage(event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(wrapper.instance().props.fetchPaginationArticles).toHaveBeenCalled();
  });
  it("tests goToFirst", () => {
    jest.spyOn(paginationUtils, "getTarget").mockReturnValue({ classList: { add: jest.fn() } });
    const event = {
      preventDefault: jest.fn(),
    };
    wrapper.instance().goToFirst(event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(wrapper.instance().props.fetchPaginationArticles).toHaveBeenCalled();
  });

  it("tests goToLast", () => {
    wrapper.instance().goToLast();
    expect(wrapper.instance().props.fetchPaginationArticles).toHaveBeenCalled();
  });
  it("tests goToPrevious", () => {
    wrapper.instance().goToPrevious();
    expect(wrapper.instance().props.fetchPaginationArticles).toHaveBeenCalled();
  });
  it("tests goToNext", () => {
    const event = {
      preventDefault: jest.fn(),
    };
    wrapper.instance().goToNext(event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(wrapper.instance().props.fetchPaginationArticles).toHaveBeenCalled();
  });
});
