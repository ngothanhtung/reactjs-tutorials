import React from 'react';
import Toolbar from './components/Toolbar';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = React.createContext(null);

function ReactContextExample() {
  const [theme, setTheme] = React.useState(themes.light);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setThemeDark: () => {setTheme(themes.dark)},
        setThemeLight: () => {
          setTheme(themes.light);
        },
      }}
    >
      <Toolbar />
    </ThemeContext.Provider>
  );
}

export default ReactContextExample;
