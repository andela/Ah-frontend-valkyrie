import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../actions/loginActions";
import "./styles/Login.css";
import LoginForm from "./login/LoginForm";
import { changelistener } from "../../../utils/globals";
import SocialAuth from "./social/SocialAuth";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);
  }


  render() {
    const { email, password } = this.state;
    const { isLoginPending, loginError } = this.props;
    return (
      <Container>
        <LoginForm
          onSubmit={this.onSubmit}
          email={email}
          password={password}
          changed={changelistener(this)}
          isLoginPending={isLoginPending}
          loginError={loginError}
        />
        <h4 className="text-center">Sign in with</h4>
        <SocialAuth />
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
        Forgot password?
        {" "}
        <a href="/reset_password">Reset</a>
      </p>
    </div>
  </div>
);

Container.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

Login.propTypes = ({
  isLoginPending: PropTypes.bool.isRequired,
  loginError: PropTypes.string,
  login: PropTypes.func.isRequired,
});

Login.defaultProps = {
  loginError: "",
};

const mapStateToProps = state => ({
  isLoginPending: state.loginReducer.isLoginPending,
  loginSuccess: state.loginReducer.loginSuccess,
  loginError: state.loginReducer.loginError,
  isAuthenticated: state.loginReducer.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
