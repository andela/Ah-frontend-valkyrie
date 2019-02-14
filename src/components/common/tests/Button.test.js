import React from 'react';
import expect from 'expect';
import { create } from 'react-test-renderer';

import Button from '../Button';

describe( 'Button component', () => {
  test( 'it matches the snapshot', () => {
    const component = create( <Button /> );
    expect( component.toJSON() ).toMatchSnapshot();
  } );
} );
