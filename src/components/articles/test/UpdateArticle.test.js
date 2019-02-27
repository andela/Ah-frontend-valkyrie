import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { UpdateArticle } from '../UpdateArticle';

describe( 'Test update article component', () => {
  const props = {
    updatedArticle: {},
    articleError: {},
    article: {
      description: 'test article description',
      title: 'test article',
      body: 'test body ',
      slug: 'test-article',
      tagList: [ 'test' ],
      articleError: "",
    },
    authUser: {
      isAuthenticated: true,
    },
    match: {
      params: {
        slug: 'test-slug',
      }
    },
    fetchSingleArticle: jest.fn(),
    updateArticle: jest.fn(),
  };
  const state = {
    title: "",
    description: "",
    body: "",
    tags: "",
    articleError: "",
    articleCreated: false
  };

  const wrapper = shallow( <UpdateArticle { ...props } /> );
  wrapper.setState(state);

  it( 'Matches the snapshot', () => {
    expect( wrapper ).toMatchSnapshot();
  } );

  it("Should handle on change", () => {
    const event = {
      target: { name: "body", value: "testValue" }
    };
    wrapper.instance().handleOnChange(event);
    expect(wrapper.state("body")).toEqual("testValue");
  });

  it("Should handle on change editor", () => {
    const event = "Editor test value";
    wrapper.instance().handleEditor(event);
    expect(wrapper.state("body")).toEqual("Editor test value");
  });

  it("Should handle on on submit", () => {
    const event = {
      preventDefault: jest.fn(),
    };
    wrapper.instance().handleOnSubmit(event);
    expect(props.addArticle).toHaveBeenCalled;
  });

  it ( 'Should receive props', () => {
    const nextProps = {
      article: {
        article: {
          title: 'test article',
        body: 'article body',
        },
      },
      updatedArticle: {
        articles: {
          article: {},
        },
      },
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state('title')).toEqual('test article');
  } );

} );
