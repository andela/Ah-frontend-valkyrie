import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchNotifications, markNotificationAsRead } from "../../actions/notificationActions";
import ShowNotification from "./ShowNotification";
import Loader from "../common/Loader";

export class ViewNotifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationsCount: 0,
      notifications: [],
      markAsReadResponse: "",
      fetching: true,
    };
  }

  componentDidMount() {
    this.props.fetchNotifications();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notifications) {
      if (nextProps.notifications.notifications) {
        this.setState({
          notifications: nextProps.notifications,
          notificationsCount: nextProps.notifications.notifications.length,
        });
      }
      this.setState({ fetching: false });
    }
    if (nextProps.markAsRead) {
      this.setState({ markAsReadResponse: nextProps.markAsRead });
    }
  }

  markAsReadHandler = () => {
    this.setState({ markAsReadResponse: "" });
    this.props.markNotificationAsRead();
  }

  render() {
    const {
      notifications, markAsReadResponse, notificationsCount, fetching,
    } = this.state;
    return (
      <div className="container mt-5">
        <h5>
          {`All Notifications (${notificationsCount})`}
        </h5>
        {
          notifications.length !== 0 ? (
            <Fragment>
              <button
                type="button"
                className="btn bnt-sm btn-outline-primary mb-1 rounded-0 align-right d-block"
                onClick={this.markAsReadHandler}
              >
                Mark All as Read
              </button>
            </Fragment>
          ) : ""
        }
        { markAsReadResponse ? (
          <span><p className="text-success">{markAsReadResponse}</p></span>
        ) : ""
        }
        <div className="accordion" id="notificationAccordion">
          {
            notifications.length < 1 ? (
              <Fragment>
                {
                  fetching ? (
                    <Loader text="Fetching your Notifications..." />
                  ) : (
                    <Fragment>
                      <div className="alert alert-danger" role="alert">
                          You currently dont have any notifications
                      </div>
                    </Fragment>
                  )
                }
              </Fragment>
            ) : (
              (notifications.notifications).map((notification, key) => (
                <ShowNotification key={key} notification={notification} accordonKey={key} />
              ))
            )
          }
        </div>
      </div>
    );
  }
}

ViewNotifications.propTypes = {
  notifications: PropTypes.instanceOf(Object).isRequired,
  markAsRead: PropTypes.string,
};

ViewNotifications.defaultProps = {
  markAsRead: "",
};

const mapStateToProps = state => ({
  notifications: state.notifications.notifications,
  markAsRead: state.notifications.markRead.message,
  authUser: state.loginReducer,
});
export default connect(
  mapStateToProps, { fetchNotifications, markNotificationAsRead },
)(ViewNotifications);
