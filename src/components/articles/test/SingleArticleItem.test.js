import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { SingleArticleItem } from '../SingleArticleItem';

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
    },
  };

  const wrapper = shallow(<SingleArticleItem { ...props } />);
  it( 'Matches the snapshot', () => {
    expect( wrapper ).toMatchSnapshot();
  } );
} );
