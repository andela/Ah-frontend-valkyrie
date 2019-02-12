import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//  Load components
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route path="/users/login" component={Login} />
            <Route path="/users/register" component={Register} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
