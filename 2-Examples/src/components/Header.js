import React from 'react';
import PropTypes from 'prop-types';

function Header({ size, color, text }) {
  return (
    <div>
      <h1 style={{ fontSize: size, color: color }}>{text}</h1>
    </div>
  );
}

Header.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Header;
