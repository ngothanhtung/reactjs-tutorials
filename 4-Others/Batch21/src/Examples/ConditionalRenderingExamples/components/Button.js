import React from 'react';
import styles from './button.module.css';
import PropTypes from 'prop-types';

function Button({ disabled, onClick, style }) {
  return (
    <button
      style={style}
      disabled={disabled}
      className={[styles.button, disabled ? styles.button_disable : ''].join(' ')}
      onClick={() => {
        if (onClick && typeof onClick === 'function') {
          onClick();
        }
      }}
    >
      Button
    </button>
  );
}

Button.propTypes = {
  style: PropTypes.object,
};

Button.defaultProps = {
  style: {
    color: 'green',
  },
};

export default Button;
