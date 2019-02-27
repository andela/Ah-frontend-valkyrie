import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Modal from './Modal';

describe( 'Test create article form component', () => {
  const props = {
    children: 'children text',
  };

  const wrapper = shallow( <Modal { ...props } /> );

  it( 'Matches the snapshot', () => {
    expect( wrapper ).toMatchSnapshot();
  } );
} );
