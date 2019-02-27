import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe( 'Test create article form component', () => {
  const props = {
    text: 'loading text',
  };

  const wrapper = shallow( <Loader { ...props } /> );

  it( 'Matches the snapshot', () => {
    expect( wrapper ).toMatchSnapshot();
  } );
} );
