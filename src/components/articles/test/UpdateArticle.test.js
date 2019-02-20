import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import UpdateArticle from '../UpdateArticle';

const storeFake = ( state, action ) => ( {
  subscribe: jest.fn(),
  default: jest.fn(),
  getState: () => state,
  dispatch: () => action,
} );

const store = storeFake( {
  articles: {
    articles: {
      articles: [
        {
          id: 1,
          title: 'test articles',
          body: 'test body ',
          slug: 'test-article',
        },
      ],
    },
  },
} );

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
    },
    authUser: {
      isAuthenticated: true,
    },
  };
  const wrapper = shallow( <UpdateArticle { ...props } /> );

  it( 'Matches the snapshot', () => {
    expect( wrapper ).toMatchSnapshot();
  } );

  // it( 'should be handling onChange', () => {
  //   expect( wrapper.instance().handleOnChange() ).equals( true );
  // } );
} );
