import React from 'react';
import {shallow} from 'enzyme'
import Login from '../Login';

describe('Login component', () => {
    it('Should render the login component without crashing', () => {
      const wrapper = shallow(<Login/>)
      expect(wrapper.length).toBeTruthy();
    });
});