import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import TextInputField from '../common/TextInputField';
import { changePasswordAction } from '../../actions/ChangePasswordAction';
import "./styles/passwordReset.css"


class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      password2: '',
      disabled: '',
      errors: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event){
    const pwd = this.state.password;
    const pwd2 = this.state.password2;
    if (pwd2){
      if(pwd!== event.target.value){
        document.getElementById("password-alert").style.display="block";
        this.setState({disabled:true});
      }
      else{
        document.getElementById("password-alert").style.display="none";
        this.setState({disabled:false});
      }
    }
    this.setState( {
      [ event.target.name ]: event.target.value,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const password = this.state.password;
    const { token } = this.props.match.params;
    this.props.changePasswordAction(password, token);
    this.resetPasswordInput()

  }

  resetPasswordInput(){
    this.setState({password: '', password2: ''})
  }
  
 render() {
   const { message } = this.props.errors;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <h4 className="text-center">Reset Password</h4>
            <form onSubmit={this.handleSubmit} id='changePasswordForm'>
              <TextInputField
                changed={this.handleOnChange}
                name="password"
                placeholder="New Password"
                type="password"
                classname="form-control form-control-lg"
                icon="fas fa-unlock-alt"
                value = {this.state.password}
                required
              />
              
              <TextInputField
                changed={this.handleOnChange}
                name="password2"
                placeholder="Confirm Password"
                type="password"
                classname="form-control form-control-lg"
                icon="fas fa-unlock-alt"
                value = {this.state.password2}
                required
              />
              <div className="alert alert-danger" id="password-alert">Passwords don't match</div>
              <input
                type="submit"
                className="btn btn-block mt-4 btn-login"
                value="Reset Password"
                id="submit"
                disabled={this.state.disabled}
              />
              {
                message && (
                  (message !== "Password reset successful!") ? <div className="alert alert-danger">{message[0]}</div> :
                  <div className="alert alert-success">{message}</div>
                )
              }
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ChangePassword.propTypes = {
  changePasswordAction: PropType.func.isRequired,
  errors: PropType.object
}

const mapStateToProps = (state) => {
  return {
    changePasswordAction:  state.changePasswordAction,
    errors : state.passwordResetReducer
  }
};

export default connect(mapStateToProps, {changePasswordAction})(ChangePassword)
