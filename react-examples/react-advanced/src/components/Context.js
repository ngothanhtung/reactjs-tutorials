import React, { Component } from 'react';
const ThemeContext = React.createContext('light');

class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { theme: 'light' };
  }

  toggleTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme === 'light' ? 'dark' : 'light',
    }))
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <button onClick={this.toggleTheme}>toggle theme</button>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

// only doing this to shield end-users from the
// implementation detail of "context"
const ThemeConsumer = ThemeContext.Consumer;
const styles = {
  dark: {
    padding: 8,
    backgroundColor: 'black',
    color: 'white',
  },
  light: {
    padding: 8,
    backgroundColor: 'white',
    color: 'black',
  },
}
const ThemedButton = (props) => {
  // Use a Consumer to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  return (
    <ThemeConsumer>
      {theme => <button {...props} theme={theme} style={styles[theme]}>Hello Button</button>}
    </ThemeConsumer>
  );
}

const ThemedPanel = (props) => {
  return (
    <ThemeConsumer>
      {theme => <div style={styles[theme]}>{theme}</div>}
    </ThemeConsumer>
  );
}
class Context extends Component {
  render() {
    return (
      <ThemeProvider>
        <ThemedPanel />
        <ThemedButton />
      </ThemeProvider>
    )
  }
}

export default Context;