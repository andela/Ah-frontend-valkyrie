import expect from 'expect';
import loginReducer from '../loginRecucer';
import * as types from '../../actions/loginActions';

describe( 'login reducer', () => {
  const initialState = {
    loginSuccess: {},
    isLoginPending: false,
    isAuthenticated: false,
    loginError: null,
  };
  it( 'should return the initial state', () => {
    expect(
      loginReducer( undefined, {} ),
    ).toEqual( initialState );
  } );
  it( 'should handle SET_LOGIN_PENDING', () => {
    const action = {
      type: types.SET_LOGIN_PENDING,
    };
    expect( loginReducer( {}, action ) ).toEqual( {} );
  } );

  it( 'should handle SET_LOGIN_FAIL', () => {
    const action = {
      type: types.SET_LOGIN_ERROR,
    };
    expect( loginReducer( {}, action ) ).toEqual( {} );
  } );

  it( 'should handle SET_LOGIN_SUCCESS', () => {
    const action = {
      type: types.SET_LOGIN_SUCCESS,
      user: {
        email: 'frank.atukunda@andela.com',
        password: 'frankie123@',
      },
    };
    const expectedState = {
      email: 'frank.atukunda@andela.com',
      password: 'frankie123@',
    };

    expect( loginReducer( {}, action ) ).toEqual( expectedState );
  } );
} );
