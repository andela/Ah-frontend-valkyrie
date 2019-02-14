import React from 'react';
import PropTypes from 'prop-types';

const Modal = ( { children } ) => (
  <div className="modal fade" id="auth-modal" tabIndex="-1" role="dialog" aria-labelledby="authModalTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  </div>
);

Modal.propTypes = ( {
  children: PropTypes.element.isRequired,
} );

export default Modal;
