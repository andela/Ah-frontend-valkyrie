import React, { Component } from 'react';

import TextInputField from '../common/TextInputField';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <h4 className="text-center">Create your account</h4>
            <form>
              <TextInputField
                name="username"
                placeholder="Username"
                type="text"
                classname="form-control form-control-lg"
                icon="fas fa-user"
              />

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

              <TextInputField
                name="password2"
                placeholder="Confirm Password"
                type="password"
                classname="form-control form-control-lg"
                icon="fas fa-unlock-alt"
              />
              <input
                type="submit"
                className="btn btn-dark btn-block mt-4"
                value="Register"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
