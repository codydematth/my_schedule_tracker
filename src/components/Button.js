import React from 'react';
import PropTypes from 'prop-types';

const Button = ({text, color, onClick}) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{backgroundColor: color}}
        className='py-2 px-8 rounded text-white font-bold font-mono text-lg'>
        {' '}
        {text}{' '}
      </button>
    </div>
  );
};
Button.defaultProps = {
  color: 'blue',
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
