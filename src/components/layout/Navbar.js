import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../../assets/images/logo.png";
import Modal from "../common/Modal";
import Login from "../auth/Login";
import "./styles/Navbar.css";
import profileImage from "../../assets/images/img_avatar.png";
import { logout } from "../../actions/index";
import Notifications from "../notifications/Notifications";
import { fetchNotifications } from "../../actions/notificationActions";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { notifications: [] };
  }

  componentDidMount() {
    this.props.fetchNotifications();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notifications) {
      if (nextProps.notifications.message) {
        this.setState({ notifications: [] });
      } else {
        this.setState({
          notifications: nextProps.notifications.notifications,
        });
      }
    }
  }

  logoutHandler = () => {
    this.props.logout();
    window.location.href = "/";
  }

  render() {
    const { authUser } = this.props;
    const { notifications } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="logo" height="32" width="32" />
              <strong className="text-white">&nbsp; AUTHORS HAVEN </strong>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              { authUser.isAuthenticated ? (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Notifications
                      notifications={notifications}
                      markAsReadHandler={this.markAsReadHandler}
                    />
                  </li>
                  <li>
                    <div className="dropdown" id="profileImage">
                      <button
                        className="btn btn-link dropdownToggle"
                        type="button"
                        id=""
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img src={profileImage} className="profile-image" alt="Profile" />
                      </button>
                      <DropDownMenu clicked={this.logoutHandler} />
                    </div>
                  </li>
                </ul>
              ) : (
                <NavbarLink />
              )}
            </div>
          </div>
        </nav>
        <Modal>
          <Login />
        </Modal>
      </div>
    );
  }
}
const DropDownMenu = ({ clicked }) => (
  <div className="dropdown-menu" aria-labelledby="dropdownMenu">
    <Link to="/users/dashboard" className="dropdown-item">My Profile</Link>
    <Link to="/article/create" className="dropdown-item">Write article</Link>
    <Link to="/users/dashboard" className="dropdown-item">My bookmarks</Link>
    <button className="dropdown-item" type="button">My favorites</button>
    <hr />
    <button className="dropdown-item" type="button" onClick={clicked}>
      Logout
    </button>
  </div>
);

const NavbarLink = () => (
  <ul className="navbar-nav ml-auto">
    <li className="nav-item active">
      <button
        type="button"
        className="nav-link btn btn-sm bg-white font-weight-bold mr-2 signIn"
        data-toggle="modal"
        data-target="#auth-modal"
      >
        Sign in
      </button>
    </li>
    <li className="nav-item">
      <Link
        className="nav-link btn btn-sm bg-white font-weight-bold"
        to="/users/register"
        tabIndex="-1"
        aria-disabled="true"
      >
        Get started
      </Link>
    </li>
  </ul>
);

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  authUser: PropTypes.instanceOf(Object).isRequired,
};
DropDownMenu.propTypes = {
  clicked: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  logout: state.logout,
  notifications: state.notifications.notifications,
  authUser: state.loginReducer,
});

export default connect(
  mapStateToProps,
  { logout, fetchNotifications },
)(Navbar);
