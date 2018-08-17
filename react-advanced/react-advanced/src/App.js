import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Virtualized from './components/Virtualized';
import Context from './components/Context';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div>
          <Context />
        </div> */}
        <div>
          <Virtualized />
        </div>
      </div>
    );
  }
}

export default App;
