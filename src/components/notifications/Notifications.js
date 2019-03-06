import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Notifications = ({ notifications }) => (
  <Fragment>
    <div className="dropdown show">
      <span className="nav-link cursor-pointer" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="far fa-bell fa-2x text-white" />
        <span className="badge badge-success top">{ notifications.length }</span>
      </span>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        {
          notifications.length < 1 ? (
            <Fragment>
              <strong className="text-danger m-2 text-md">No Notifications</strong>
            </Fragment>
          ) : (
            (notifications.slice(0, 5)).map(notification => (
              <div
                className={`dropdown-item text-md ${notification.unread ? "" : "text-muted"}`}
                key={notification.id}
              >
                { notification.verb}
                {" "}
                @
                {`${notification.actor} `}
                <i
                  className={`fas fa-check-double text-sm ${notification.unread ? "text-secondary" : "text-primary"}`}
                />
              </div>
            ))
          )
        }
        {
          notifications.length > 1 ? (
            <Fragment>
              <Link className="btn btn-link text-primary" to="/notifications" notifications={notifications}>Read all </Link>
            </Fragment>
          ) : ""
        }
      </div>
    </div>
  </Fragment>
);

Notifications.propTypes = {
  notifications: PropTypes.instanceOf(Array).isRequired,
};

export default Notifications;
