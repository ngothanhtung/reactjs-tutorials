import React from 'react';

import { ThemeContext } from '../index';

function ThemeButton() {
  const theme = React.useContext(ThemeContext);
  return <button style={{ background: theme.background, color: theme.foreground }}>I am styled by theme context!</button>;
}

export default ThemeButton;
