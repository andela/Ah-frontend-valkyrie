import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import SingleArticles, { SingleArticle } from '../SingleArticle';

const storeFake = ( state, action ) => ( {
  subscribe: jest.fn(),
  default: jest.fn(),
  getState: () => state,
  dispatch: () => action,
} );

const store = storeFake( {
  articles: {
    articles: {
      id: 1,
      title: 'test articles',
      body: 'test body ',
      slug: 'test-article',
    },
  },
} );

describe( 'Test single article component', () => {
  const props = {
    fetchSingleArticle: jest.fn(),
    match: { params: { slug: 'test-article' } },
    deletedArticle: {},
    article: {
      id: 1,
      title: 'test article',
      body: 'test body ',
      slug: 'test-article',
    },
  };
  const wrapper = mount(
    <Provider store={ store }>
      <SingleArticles { ...props } />
    </Provider>,
  );
  wrapper.setState( { article: props.article } );
  const component = shallow( <SingleArticle { ...props } /> );
  it( 'Matches the snapshot', () => {
    expect( wrapper ).toMatchSnapshot();
  } );
} );
