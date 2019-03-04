import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SocialShareIcon from "./SocialShareIcon";
import { share } from "../../actions/socialShareActions";

const mapStateToProps = state => ({
  data: state.socialShareReducer.data,
  error: state.socialShareReducer.error,
  authUser: state.loginReducer,
});

const mapDispatchToProps = dispatch => ({
  share: (provider, slug) => dispatch(share(provider, slug)),
});

export class SocialShare extends Component {
  state = { unAuthUser: false }

  clickHandler = (event) => {
    const { slug, authUser } = this.props;
    if (authUser.isAuthenticated === false) {
      this.setState({ unAuthUser: true });
    } else {
      const provider = event.target.getAttribute("provider");
      this.props.share(provider, slug);
    }
  }

  render() {
    const { unAuthUser } = this.state;
    return (
      <Fragment>
        <SocialShareIcon className="fab fa-facebook-square fa-lg mr-2" provider="facebook" clicked={this.clickHandler} />
        <SocialShareIcon className="fab fa-twitter-square fa-lg mr-2" provider="twitter" clicked={this.clickHandler} />
        <SocialShareIcon className="fas fa-at fa-lg mr-2" provider="email" clicked={this.clickHandler} />
        {
          unAuthUser ? (
            <Fragment>
              <span className="text-danger d-block">Please login in order to share</span>
            </Fragment>
          ) : ""
        }
      </Fragment>
    );
  }
}
SocialShare.propTypes = {
  slug: PropTypes.string.isRequired,
  authUser: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SocialShare);
