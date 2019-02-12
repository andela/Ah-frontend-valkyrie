/* eslint-disable react/no-unused-state */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signUp } from "../../actions/SignupAction";
import RegisterForm from "./RegisterForm";
import "./styles/RegisterCSS.css";
import "./styles/Login.css";
import Button from "../common/Button";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

library.add(faSpinner);

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      disabled: false,
      display: "none",
      errors: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    if (e.target.name === "password2") {
      const { password } = this.state;
      if (password !== e.target.value) {
        this.setState({ disabled: true });
        document.getElementById("alert-2").style.display = "block";
      } else {
        this.setState({ disabled: false });
        document.getElementById("alert-2").style.display = "none";
      }
    }
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit(e) {
    e.preventDefault();
    this.setState({ display: "block" });
    const userData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    this.props.signUp(userData);
  }

  render() {
    const { errors } = this.props;
    const none = "none";

    return (
      <div className="container">
        <div
          className="alert alert-success text-center"
          role="alert"
          id="alert"
          style={{ display: none }}
        />
        <div
          className="spinner"
          id="spinner"
          style={{ display: this.state.display }}
        >
          <FontAwesomeIcon
            icon="spinner"
            className="fal fa-spinner fa-3x fa-pulse"
          />
        </div>
        <div className="row" id="reg_div">
          <div className="col-md-6 m-auto">
            <h4 className="text-center">Create your account</h4>
            <RegisterForm
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              errors={errors}
              disabled={this.state.disabled}
            />
            <div className="social-buttons">
              <Button
                text="Google"
                icon="fab fa-google"
                className="btn btn-danger"
              />
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const registerForm = () => {};

Register.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  errors: PropTypes.object,
  signUp: PropTypes.func,
};

const mapStateToProps = state => ({
  errors: state.signupReducer.errors,
});

export default connect(
  mapStateToProps,
  { signUp },
)(Register);
