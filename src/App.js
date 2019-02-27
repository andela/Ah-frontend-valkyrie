import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store/index";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import ProfileDashboard from "./components/profile/ProfileDashboard";
import { loginSuccess } from "./actions/loginActions";
import setAuthToken from "./utils/setAuthToken";
import { logout } from "./actions/index";
import ResetPassword from "./components/auth/reset_password";
import ChangePassword from "./components/auth/change_password";
import SingleArticle from "./components/articles/SingleArticle";
import PostArticle from "./components/articles/CreateArticle";
import UpdateArticle from "./components/articles/UpdateArticle";

if (localStorage.auth_token) {
  setAuthToken(localStorage.auth_token);
  const userData = jwt_decode(localStorage.auth_token);
  store.dispatch(loginSuccess(userData));

  const currentTime = Date.now() / 1000;
  if (userData.exp < currentTime) {
    logout();
    window.location.href = "/";
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route path="/users/login" component={Landing} />
          <Route path="/users/register" component={Register} />
          <Route path="/reset_password" component={ResetPassword} />
          <Route path="/change_password/:token" component={ChangePassword} />
          <Route path="/users/dashboard" component={ProfileDashboard} />
          <Route path="/article/create" component={PostArticle} />
          <Route path="/articles/:slug/edit/" component={UpdateArticle} />
          <Route exact path="/articles/:slug" component={SingleArticle} />
        </div>
      </Router>
    );
  }
}

export default App;
