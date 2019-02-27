import React, { Component } from "react";
import { connect } from "react-redux";
import PropType from "prop-types";
import TextInputField from "../common/TextInputField";
import { resetPasswordAction } from "../../actions/ResetPasswordLinkAction";
import "./styles/Login.css";
import classnames from "classnames";
import "./styles/passwordReset.css";


class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      disabled: "",
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const email = this.setState({ email: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    this.props.resetPasswordAction(email);
    this.resetTextInput();
  }

  resetTextInput() {
    this.setState({ email: "" });
  }

  render() {
    const success = this.props.errors.message;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <br />
            <br />
            <h4 className="text-center">Reset Password</h4>
            <form onSubmit={this.handleSubmit} id="resetPasswordForm">
              <TextInputField
                changed={this.handleChange}
                name="email"
                placeholder="Email"
                type="text"
                classname="form-control form-control-lg"
                icon="fas fa-envelope"
                value={this.state.email}
                required
              />
              <div className="alert alert-danger" id="email-alert">Please enter a valid email address</div>
              <input
                type="submit"
                className="btn btn-block mt-4 btn-login"
                value="Send Link"
                disabled={this.state.disabled}
              />
              {
                success && (
                  (success !== "A password reset email has been sent to your email account!") ? <div className="alert alert-danger">Email does not exist</div>
                    : <div className="alert alert-success">{success}</div>
                )
              }
            </form>
            <br />
            <br />
            <p>
Remember Password? Click
              <b>Sign In</b>
              {" "}

            </p>
          </div>
        </div>
      </div>
    );
  }
}


ResetPassword.propTypes = {
  resetPasswordAction: PropType.func.isRequired,
  errors: PropType.object,
};

const mapStateToProps = state => ({
  passwordResetAction: state.passwordResetAction,
  errors: state.passwordResetReducer,
});

export default connect(mapStateToProps, { resetPasswordAction })(ResetPassword);
