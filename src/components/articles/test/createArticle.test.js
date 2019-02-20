import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import CreateArticle from '../CreateArticle';

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
  loginReducer: {
    isAuthenticated: true,
    username: 'test-users',
  },
} );

describe( 'Test create article component', () => {
  const props = {
    article: {},
    addArticle: jest.fn(),
    authUser: {
      isAuthenticated: true,
    },
  };
  const state = {
    title: '',
    description: '',
    articleBody: '',
    tags: '',
    articleError: '',
    articleCreated: false,
  };

  store.getState().loginReducer.isAuthenticated = true;
  const wrapper = shallow(
    <Provider store={ store }>
      <CreateArticle { ...props } />
    </Provider>,
  );
  wrapper.setState( state );
  it( 'Matches the snapshot', () => {
    expect( wrapper ).toMatchSnapshot();
  } );
} );
