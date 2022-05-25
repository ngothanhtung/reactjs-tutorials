import * as React from 'react';
import logo from './logo.svg';



class Header extends React.Component {

  public OnClick = () => {
    alert('OK');
  }

  public render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <button onClick={this.OnClick}>
          Click me
        </button>
      </header>
    );
  }
}
export default Header;