import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Login from './Login';

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
          console.log(this.state);

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
      selectedSubject: 2,
      checked: false,
      username: '',
      password: '',
      invalidUsername: false
    };
  }

  render() {
    return (
      <div className="container">
        <select value={this.state.selectedSubject} className="form-control" onChange={(e) => { this.setState({ selectedSubject: e.target.value }) }}>
          <option value="1">C#</option>
          <option value="2">Java</option>
        </select>

        <div class="form-group form-check">
          <input defaultChecked={this.state.checked} type="checkbox" class="form-check-input" onChange={(e) => { console.log(e.target.checked) }} id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <h2>{this.state.selectedSubject}</h2>
        <Login buttonLabel="Open" />
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
