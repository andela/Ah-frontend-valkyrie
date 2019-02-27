import store from "../../store/index";

// export const authUser = () => JSON.parse( window.localStorage.getItem( 'loggedUser' ) );

export const isAuthenticated = () => store.getState().loginReducer;
