import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ShowNotification = ({ notification, accordonKey }) => (
  <Fragment>
    <div className="card card-sm rounded-0">
      <div className="card-header" id="headingOne">
        <h5 className="mb-0">
          <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse${accordonKey}`} aria-expanded="true" aria-controls={`collapse${accordonKey}`}>
            {
              notification.unread ? (
                <i className="fas fa-check-double text-sm text-secondary" />
              ) : (
                <i className="fas fa-check-double text-sm text-primary" />
              )
            }
            { `${notification.verb} @${notification.actor}`}
          </button>
        </h5>
      </div>

      <div id={`collapse${accordonKey}`} className={`collapse ${accordonKey === 0 ? "show" : "hide"}`} aria-labelledby="headingOne" data-parent="#notificationAccordion">
        <div className="card-body">
          {`You have ${notification.verb} @${notification.actor} `}
          <p className="text-muted text-sm">
            <Moment>{notification.timestamp}</Moment>
          </p>
          <p className="text-md">{`Emailed: ${notification.emailed ? "Yes." : "No."} `}</p>
        </div>
      </div>
    </div>
  </Fragment>
);

ShowNotification.propTypes = {
  notification: PropTypes.instanceOf(Object).isRequired,
  accordonKey: PropTypes.number.isRequired,
};

export default ShowNotification;
