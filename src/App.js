import React from 'react';
import jwt_decode from 'jwt-decode';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store/index';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { loginSuccess, setCurrentUser } from './actions/loginActions';

if ( localStorage.auth_token ) {
  const userData = jwt_decode( localStorage.auth_token );
  store.dispatch( setCurrentUser( true ) );
  store.dispatch( loginSuccess( userData ) );
}
const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={ Landing } />
      <Route path="/users/login" component={ Login } />
      <Route path="/users/register" component={ Register } />
    </div>
  </Router>
);

export default App;
