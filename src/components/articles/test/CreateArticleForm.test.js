import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import CreateArticleForm from '../CreateArticleForm';

describe( 'Test create article form component', () => {
  const props = {
    handleOnSubmit: jest.fn(),
    handleOnChange: jest.fn(),
    handleEditor: jest.fn(),
  };

  const wrapper = shallow( <CreateArticleForm { ...props } /> );

  it( 'Matches the snapshot', () => {
    expect( wrapper ).toMatchSnapshot();
  } );
} );
