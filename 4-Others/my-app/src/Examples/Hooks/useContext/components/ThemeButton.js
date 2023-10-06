import React from 'react';

import { ThemeContext } from '../index';

function ThemeButton() {
  const themeContext = React.useContext(ThemeContext);
  return <button style={{ background: themeContext.theme.background, color: themeContext.theme.foreground }}>I am styled by theme context!</button>;
}

export default ThemeButton;
