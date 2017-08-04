import React, { Component } from 'react';

class UpdateElements extends Component {
  constructor(props){
    super(props);
    this.state = {currentCount: 100}
  }
  timer() {
    this.setState({
      currentCount: this.state.currentCount - 1
    });
    if(this.state.currentCount < 1) {
      clearInterval(this.intervalId);
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
  render() {
    return(
      <div>{this.state.currentCount}
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default UpdateElements;
