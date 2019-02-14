import React from 'react';
import Proptypes from 'prop-types';

const Button = ( { icon, text, className } ) => (
  <button type="button" className={ className }>
    <i className={ icon } />
    {text}
  </button>
);

Button.propTypes = ( {
  className: Proptypes.string,
  text: Proptypes.string,
  icon: Proptypes.string,

} );

Button.defaultProps = {
  className: '',
  text: '',
  icon: '',
};

export default Button;
