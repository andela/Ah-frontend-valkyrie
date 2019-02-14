import { loginSuccess } from './loginActions';

const logout = () => ( dispatch ) => {
  localStorage.clear();
  dispatch( loginSuccess( {} ) );
};

export default logout;
