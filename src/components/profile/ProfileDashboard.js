import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProfileNav from "./ProfileNav";
import ProfileTabs from "./ProfileTabs";
import EditProfileForm from "./EditProfileForm";
import { fetchProfile, updateProfile } from "../../actions/profile";
import Footer from "../layout/Footer";
import "../../assets/css/profile.css";
import store from "../../store/index";
import { changelistener } from "../../../utils/globals";

export class ProfileDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.profile.first_name,
      lastName: "",
      username: "",
      bio: "",
      image: "",
      isEditAvailable: false,
      newStateAvailable: true,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onClickClose = this.onClickClose.bind(this);
    // this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchProfile(store.getState().loginReducer.id);
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.profile).length > 0) {
      this.setState({ firstName: nextProps.profile.first_name });
      this.setState({ lastName: nextProps.profile.last_name });
      this.setState({ username: nextProps.profile.username });
      this.setState({ bio: nextProps.profile.bio });
      this.setState({ image: nextProps.profile.image });
    }
  }

  onClickEdit(event) {
    event.preventDefault();
    this.setState({ isEditAvailable: true });
    this.setState({ newStateAvailable: false });
  }

  onClickClose(event) {
    event.preventDefault();
    this.setState({ newStateAvailable: true });
    this.setState({ isEditAvailable: false });
  }

  onSubmit(event) {
    event.preventDefault();
    const newProfile = {
      user: {
        username: this.state.username,
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        bio: this.state.bio,
        image: this.state.image,
      },
    };
    this.props.updateProfile(newProfile, store.getState().loginReducer.id);
  }

  render() {
    const { error, loading, profile } = this.props;
    console.log(this.state.firstName);

    if (error) {
      return (
        <div className="alert alert-warning" role="alert">
          {error.message}
        </div>
      );
    }

    if (loading) {
      return (
        <div className="alert alert-primary" role="alert">
          Loading ...
        </div>
      );
    }

    return (
      <div>
        <div className="container mb-4" data-test="profileComponent">
          <ProfileNav
            profile={profile}
            isEditAvailable={this.state.isEditAvailable}
            onClickEdit={this.onClickEdit}
            onClickClose={this.onClickClose}
            newStateAvailable={this.state.newStateAvailable}
          />

          {this.state.isEditAvailable ? (
            <EditProfileForm
              profile={profile}
              onSubmit={this.onSubmit}
              changed={changelistener(this)}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              username={this.state.username}
              bio={this.state.bio}
            />
          ) : (
            <ProfileTabs />
          )}

          {/* end row */}
        </div>

        <Footer />
      </div>
    );
  }
}

ProfileDashboard.propTypes = {
  fetchProfile: PropTypes.func,
  updateProfile: PropTypes.func,
};

const mapStateToProps = state => ({
  profile: state.profile.profile,
  loading: state.profile.loading,
  error: state.profile.error,
});

export default connect(
  mapStateToProps,
  { fetchProfile, updateProfile },
)(ProfileDashboard);
