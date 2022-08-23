import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const Header = ({ text, onAdd, showAdd }) => {
  return (
    <>
      <header className='flex justify-between text-center md:w-2/5 m-auto mt-32 mb-2 border-b-2 border-green-800'>
        <h2 className=' text-3xl'>{text} </h2>
        <Button text={showAdd ? 'Close' : 'Add'} color={showAdd ? 'red' : 'green'} onClick={onAdd} />
      </header>
    </>
  );
};
Header.propTypes = {
  text: PropTypes.string,
};
Header.defaultProps = {
  text: 'Task Tracker',
};

export default Header;
