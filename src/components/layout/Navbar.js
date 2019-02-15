import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

class Navbar extends Component {
  constructor( props ) {
    super( props );
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={ Logo } alt="logo" height="32" width="32" />
              <strong className="text-white">
                &nbsp; AUTHORS HAVEN
              </strong>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link text-white" to="/users/login">
                    Sign in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link btn btn-sm bg-white font-weight-bold"
                    to="/users/register"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Get started
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
