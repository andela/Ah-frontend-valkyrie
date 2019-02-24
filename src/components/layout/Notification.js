import React from 'react';
import PropTypes from 'prop-types';

function Notification( props ) {
  return (
    <div>
      <div className="toast" role="alert" ariaLive="assertive" ariaAtomic="true">
        <div className="toast-header">
          <img src="img.jpg" className="rounded mr-2" alt="toast" />
          <strong className="mr-auto">
            { this.props.title }
          </strong>
          <small className="text-muted">11 mins ago</small>
          <button type="button" className="ml-2 mb-1 close" dataDismiss="toast" ariaLabel="Close">
            <span ariaHidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body">
          { this.props.message }
        </div>
      </div>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Notification;
