import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { socialLogin } from "../../../actions/socialActions";
import Button from "../../common/Button";

const appId = process.env.APP_ID;
const clientId = process.env.CLIENT_ID;

class SocialAuth extends Component {
  handleGoogleResponse = (response) => {
    this.props.socialLogin(response.tokenId, "google.com");
  };

  handleFacebookResponse = (response) => {
    this.props.socialLogin(response.accessToken, "facebook.com");
  };

  render() {
    return (
      <div>
        <GoogleLogin
          clientId={clientId}
          autoLoad={false}
          onSuccess={this.handleGoogleResponse}
          onFailure={this.handleGoogleResponse}
          theme="dark"
          className="btn btn-danger"
          icon={false}
        >
          <i className="fab fa-google" />
          {" "}
Google
        </GoogleLogin>

        <FacebookLogin
          textButton="Facebook"
          icon="fab fa-facebook-f"
          appId={appId}
          fields="name,email,picture"
          autoLoad={false}
          callback={this.handleFacebookResponse}
          cssClass="btn facebook-btn"
        />
        <Button text="Twitter" icon="fab fa-twitter" className="btn twitter-btn" />
      </div>
    );
  }
}

SocialAuth.propTypes = {
  socialLogin: PropTypes.func.isRequired,
};

export default connect(
  null,
  { socialLogin },
)(SocialAuth);
