import React, { Component } from 'react';

import TextInputField from '../common/TextInputField';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <h4 className="text-center">Sign in to your account</h4>
            <form>
              <TextInputField
                name="email"
                placeholder="Email"
                type="text"
                classname="form-control form-control-lg"
                icon="fas fa-envelope"
              />

              <TextInputField
                name="password"
                placeholder="Password"
                type="password"
                classname="form-control form-control-lg"
                icon="fas fa-unlock-alt"
              />
              <input
                type="submit"
                className="btn btn-dark btn-block mt-4"
                value="Sign in"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
