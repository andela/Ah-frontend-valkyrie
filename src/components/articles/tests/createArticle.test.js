import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import { CreateArticle } from "../CreateArticle";

describe("Test create article component", () => {
  const push = jest.fn();
  const info = jest.fn();
  const warning = jest.fn();
  const toast = {
    info,
    warning,
  };
  const props = {
    article: {},
    addArticle: jest.fn(),
    authUser: {
      isAuthenticated: true
    },
    history: {
      push
    },
    articleError: "",
    addArticle: jest.fn(),
  };
  const state = {
    title: "",
    description: "",
    articleBody: "",
    tags: "",
    articleError: "",
    articleCreated: false
  };

  const wrapper = shallow(<CreateArticle {...props} />);
  wrapper.setState(state);

  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it(" Should receive props ", () => {
    wrapper.setProps({
      article: {
        articles: {
          id: 1,
          title: "test articles",
          body: "test body ",
          slug: "test-article"
        }
      }
    });
    expect(push).toHaveBeenCalled();
  });

  it("Should handle on change", () => {
    const event = {
      target: { name: "body", value: "testValue" }
    };
    wrapper.instance().onChangeHandler(event);
    expect(wrapper.state("body")).toEqual("testValue");
  });

  it("Should handle on change editor", () => {
    const event = "Editor test value";
    wrapper.instance().handleEditor(event);
    expect(wrapper.state("articleBody")).toEqual("Editor test value");
  });

  it("Should handle on on submit", () => {
    const event = {
      preventDefault: jest.fn(),
    };
    wrapper.instance().handleOnSubmit(event);
    expect(props.addArticle).toHaveBeenCalled();
  });

  it("Should rteceive props and toast info", () => {
    const nextProps = {
      article: {
        articles: '',
      },
      articleError: 'error',
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state('createError')).toEqual(true);
  });


  it("Should receive props and toast warning", () => {
    const nextProps = {
      article: {
        articles: '',
      },
      articleError: '',
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state('otherError')).toEqual(true);
  });

});