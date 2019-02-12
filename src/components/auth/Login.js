import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../actions/loginActions";
import "./styles/Login.css";
import Button from "../common/Button";
import LoginForm from "./login/LoginForm";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  ChangedHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password } = this.state;
    const { isLoginPending, loginError } = this.props;
    return (
      <Container>
        <LoginForm
          onSubmit={this.onSubmit}
          email={email}
          password={password}
          changed={this.ChangedHandler}
          isLoginPending={isLoginPending}
          loginError={loginError}
        />
        <h4 className="text-center">Sign in with</h4>
        <Button text="Google" icon="fab fa-google" className="btn btn-danger" />
        <Button
          text="Twitter"
          icon="fab fa-twitter"
          className="btn twitter-btn"
        />
        <Button
          text="Facebook"
          icon="fab fa-facebook-f"
          className="btn facebook-btn"
        />
        <ResetPasswordFunction />
      </Container>
    );
  }
}

export const Container = ({ children }) => (
  <div className="container">
    <div className="row Login">
      <div className="col-md-12 m-auto">
        <h4 className="text-center signIn">Sign in to your account</h4>
        {children}
      </div>
    </div>
  </div>
);

export const ResetPasswordFunction = () => (
  <div className="row mt-2">
    <div className="col-md-6">
      <p className="text-center mt-2">
        No accout?
        <a href="/users/register"> Sign up</a>
      </p>
    </div>
    <div className="col-md-6">
      <p className="text-center mt-2">
        Forgot password? <a href="/users/reset-password">Reset</a>
      </p>
    </div>
  </div>
);

Container.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired
};

Login.propTypes = {
  isLoginPending: PropTypes.bool.isRequired,
  loginError: PropTypes.string,
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoginPending: state.loginReducer.isLoginPending,
  loginSuccess: state.loginReducer.loginSuccess,
  loginError: state.loginReducer.loginError,
  isAuthenticated: state.loginReducer.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
