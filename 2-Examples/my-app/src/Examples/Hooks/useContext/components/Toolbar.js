import React from 'react';
import ThemeButton from './ThemeButton';
import { ThemeContext } from '../index';

function Toolbar() {
  const themeContext = React.useContext(ThemeContext);

  return (
    <div>
      <button
        onClick={() => {
          themeContext.setThemeLight();
        }}
      >
        Light
      </button>
      <button
        onClick={() => {
          themeContext.setThemeDark();
        }}
      >
        Dark
      </button>
      <ThemeButton />
    </div>
  );
}

export default Toolbar;
