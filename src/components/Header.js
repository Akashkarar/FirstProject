import PropTypes from 'prop-types';
import Button from './Button';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = ({ title, add, showAdd }) => {
  const location = useLocation();
  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          bgcolor='green'
          text={showAdd ? 'CLOSE' : 'ADD'}
          onClick={add}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.prototype = {
  title: PropTypes.string.isRequired,
};
export default Header;
