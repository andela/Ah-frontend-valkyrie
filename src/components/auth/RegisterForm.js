import React from "react";
import TextInputField from "../common/RegisterFields";

const registerForm = ({ onSubmit, onChange, errors, disabled }) => {
  return (
    <form onSubmit={onSubmit} id="reg-form">
      <TextInputField
        name="username"
        placeholder="Username"
        type="text"
        classname="form-control form-control-lg"
        icon="fas fa-user"
        onChange={onChange}
        error={errors.username && errors.username[0]}
      />
      <TextInputField
        name="email"
        placeholder="Email"
        type="text"
        classname="form-control form-control-lg"
        icon="fas fa-envelope"
        onChange={onChange}
        error={errors.email && errors.email[0]}
      />
      <TextInputField
        name="password"
        placeholder="Password"
        type="password"
        classname="form-control form-control-lg"
        icon="fas fa-unlock-alt"
        onChange={onChange}
        error={errors.password && errors.password[0]}
      />
      <TextInputField
        name="password2"
        placeholder="Confirm Password"
        type="password"
        classname="form-control form-control-lg"
        icon="fas fa-unlock-alt"
        onChange={onChange}
        error={errors.password && errors.password[0]}
      />
      <div className="alert alert-danger" id="alert-2" role="alert">
        passwords don't match
      </div>
      <input
        type="submit"
        className="btn btn-dark btn-block mt-4 cursor"
        value="Register"
        id="submit_btn"
        disabled={disabled}
      />
      <h4 className="text-center">Signup with</h4>
    </form>
  );
};

export default registerForm;
