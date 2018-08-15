import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {

      color: 'red'
    };
  }
  render() {
    return (
      <button
        style={{ backgroundColor: this.state.color }}
        onClick={() => {
          this.setState({ color: 'green' });
        }}
      >
        {this.props.title}
      </button>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <h1>Hello react</h1>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      invalidUsername: false
    };
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div>
          <input className="form-control" type="text" onChange={(e) => {
            this.setState({ username: e.target.value, invalidUsername: false })
          }} />
          {
            this.state.invalidUsername &&
            <span style={{ color: 'red' }}>X</span>
          }

          <input className="form-control" type="text" onChange={(e) => {
            this.setState({ password: e.target.value })
          }} />
          <button
            className="btn btn-danger"
            onClick={() => {
              if (this.state.username.length === 0) {
                this.setState({ invalidUsername: true });
              }
              else {
                this.setState({ invalidUsername: false });
              }
              // alert(this.state.username);
              // alert(this.state.password);
            }}
          >
            Login
          </button>
          <Button title="Save" />
          <Button title="Open" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
