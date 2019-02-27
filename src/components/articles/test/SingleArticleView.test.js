import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { SingleArticleView } from '../SingleArticleView';

describe( 'Test single article component', () => {
  const props = {
    article: {
        id: 1,
        title: 'test article',
        body: 'test body ',
        slug: 'test-article',
        comments: [],
        likes: {
            count: 0,
        },
        dislikes: {
            count: 0,
        },
        author: {
            username: 'testUser',
        },
        tagList: ['tag1', 'tag2'],
    },
    authUser: {
        isAuthenticated: true,
        username: 'testUser',
    },
    slug: 'some-slug',
  };

  const wrapper = shallow(<SingleArticleView { ...props } />);
  it( 'Matches the snapshot', () => {
    expect( wrapper ).toMatchSnapshot();
  } );
} );
