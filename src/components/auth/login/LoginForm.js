import React from "react";
import PropTypes from "prop-types";
import TextInputField from "../../common/TextInputField";
import Alert from "../../Alert/Alert";

const LoginForm = (props) => {
  const {
    onSubmit, changed, email, password, isLoginPending, loginError,
  } = props;
  return (
    <form name="LoginForm" onSubmit={onSubmit} id="login-form">
      <TextInputField
        name="email"
        placeholder="Email"
        type="text"
        classname="form-control form-control-lg"
        icon="fas fa-envelope"
        changed={changed}
        value={email}
        required
      />

      <TextInputField
        name="password"
        placeholder="Password"
        type="password"
        classname="form-control form-control-lg"
        icon="fas fa-unlock-alt"
        changed={changed}
        value={password}
        required
      />
      <input type="submit" className="btn btn-block mt-4 btn-login" value="Sign in" />
      {isLoginPending && (
        <div className="spinner-border text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {loginError && <Alert className="alert alert-danger">{loginError}</Alert>}
    </form>
  );
};
LoginForm.propTypes = {
  isLoginPending: PropTypes.bool,
  loginError: PropTypes.string,
  changed: PropTypes.func.isRequired,
  email: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  password: PropTypes.string,
};

LoginForm.defaultProps = {
  isLoginPending: false,
  loginError: "",
  email: "",
  password: "",
};

export default LoginForm;
