import React from 'react';
import PropTypes from 'prop-types';
const Button = ({ bgcolor, text, color, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ backgroundColor: bgcolor, color: color }}
        className='btn'
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  bgcolor: 'black',
  color: 'white',
};
Button.prototype = {
  bgcolor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
