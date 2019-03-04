import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import { SingleArticle } from "../SingleArticle";

describe("Test single article component", () => {
  const props = {
    fetchSingleArticle: jest.fn(),
    match: { params: { slug: "test-article" } },
    handleDeleteArticle: jest.fn(),
    deleteArticle: jest.fn(),
    article: {
      id: 1,
      title: "test article",
      body: "test body ",
      slug: "test-article",
      comments: [],
      likes: {
        count: 0
      },
      dislikes: {
        count: 0
      },
      author: {
        username: "testUser"
      },
      tagList: ["tag1", "tag2"]
    },
    authUser: {
      isAuthenticated: true,
      user: {
        username: "testUser"
      }
    }
  };
  const wrapper = shallow(<SingleArticle {...props} />);
  wrapper.setState({ triggerDelete: false });

  wrapper.setState({ article: props.article });

  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Should delete Article", () => {
    wrapper.instance().handleDeleteArticle();
    expect(wrapper.state("triggerDelete")).toEqual(true);
  });

  it("Shoud receive props", () => {
    const nextProps = {
      article: {
        article: {
          article: {
            id: 1,
            title: "test article",
            body: "test body ",
            slug: "test-article",
            comments: [],
            likes: {
              count: 0
            },
            dislikes: {
              count: 0
            },
            author: {
              username: "testUser"
            },
            tagList: ["tag1", "tag2"]
          }
        }
      },
      deleteError: {
        data: {}
      },
      triggerDelete: {}
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state("isLoading")).toEqual(false);
  });

  it("Shoud receive set loading to false props", () => {
    const nextProps = {
      article: {
        article: {
          article: {}
        }
      },
      articleError: {
        message: "cannot find this article"
      },
      deleteError: {
        data: {}
      },
      triggerDelete: {}
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state("isLoading")).toEqual(false);
  });

  it("Shoud receive set redirect to home page", () => {
    const nextProps = {
      article: {
        article: {
          article: {}
        }
      },
      deletedArticle: "success",
      deleteError: {
        data: {}
      },
      triggerDelete: {}
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state("isLoading")).toEqual(false);
  });
});
