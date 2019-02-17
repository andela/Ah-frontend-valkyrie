import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputField = ({
  name,
  label,
  type,
  placeholder,
  icon,
  onChange,
  error,
}) => (
  <div className="form-group">
    <div className="input-group">
      <span className="input-group-addon">
        <i className={icon} />
      </span>
      <input
        name={name}
        label={label}
        type={type}
        placeholder={placeholder}
        icon={icon}
        onChange={onChange}
        className={classnames("form-control form-control-lg", {
          "is-invalid ml-2": error,
        })}
      />
    </div>
    {error && (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    )}
  </div>
);

TextInputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  classname: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};
TextInputField.defaultProps = {
  label: "",
  placeholder: "",
  icon: "",
};

export default TextInputField;
