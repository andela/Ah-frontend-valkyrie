import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Articles, {Article} from '../Article';

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

describe( 'Test article component', () => {
  const props = {
    articles: [{
      id: 1,
      title: 'test article',
      body: 'test body ',
      slug: 'test-article',
    },],
    fetchArticles: jest.fn(),
  };
  const wrapper = mount(
    <Provider store={ store }>
      <Articles { ...props } />
    </Provider>,
  );
  const component = shallow( <Article {...props} /> );
  component.setState( { articles: props.articles } );

  it( 'Matches the snapshot', () => {
    expect( wrapper ).toMatchSnapshot();
  } );
  it( 'Should mount the single SingleArticleItem component', () => {
    expect(component.find('SingleArticleItem').length).toBe(1);
  } );
} );
