import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import {Article} from '../Article';

describe( 'Test article component', () => {
  const props = {
    articles: {
      id: 1,
      title: 'test article',
      body: 'test body ',
      slug: 'test-article',
    },
    fetchArticles: jest.fn(),
  };
  const wrapper = shallow(<Article { ...props } />);
  
  wrapper.setState( { articles: props.articles } );

  it( 'Matches the snapshot', () => {
    expect( wrapper ).toMatchSnapshot();
  } );

  it( 'Should receive props', () => {
    const nextProps = {
      articles: {
        articles: [
          {
            id: 1,
            title: 'test article',
            body: 'test body',
            slug: 'test-article',
          },
        ],
      },
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state('isLoading')).toEqual(false);
  } );

} );
