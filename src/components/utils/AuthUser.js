import store from '../../store/index';

export const isAuthenticated = () => store.getState().loginReducer;

