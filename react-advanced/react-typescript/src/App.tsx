import * as React from 'react';
import './App.css';
import Header from './Header';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
