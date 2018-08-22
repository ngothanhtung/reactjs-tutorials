/*
Handling events with React elements is very similar to handling events on DOM elements.
There are some syntactic differences:
  - React events are named using camelCase, rather than lowercase.
  - With JSX you pass a function as the event handler, rather than a string.
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LifecycleExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showComponent: true,
      data: 0
    }
    // register event
    this.setNewNumber = this.setNewNumber.bind(this);
  };

  setNewNumber() {
    this.setState({ data: this.state.data + 1 })
  }

  render() {
    return (
      <div>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <button onClick={() => { this.setState({ showComponent: false }) }}>HIDE</button>
        {
          this.state.showComponent &&
          <ChildComponent myNumber={this.state.data}></ChildComponent>
        }

      </div>
    );
  }
}

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  // componentWillMount is executed before rendering, on both server and client side.
  componentWillMount() {
    console.log('Component WILL MOUNT!')
  }

  // componentDidMount is executed after first render only on the client side.
  // This is where AJAX requests and DOM or state updates should occur.
  // This method is also used for integration with other JavaScript frameworks and any functions with delayed execution like setTimeout or setInterval. We are using it to update the state so we can trigger the other lifecycle methods.
  componentDidMount() {
    console.log('Component DID MOUNT!')
  }

  // componentWillReceiveProps is invoked as soon as the props are updated before another render is called.
  // We triggered it from setNewNumber when we updated the state.
  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECIEVE PROPS!')
    console.log('--- newProps', newProps);
  }

  // shouldComponentUpdate should return true or false value.
  // This will determine if component will be updated or not.
  // This is set to true by default.
  // If you are sure that component doesn't need to render after state or props are updated, you can return false value.
  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  componentWillUpdate(nextProps) {
    console.log('Component WILL UPDATE!');
    console.log('--- nextProps', nextProps);
  }

  componentDidUpdate(prevProps) {
    console.log('Component DID UPDATE!');
    console.log('--- prevProps', prevProps);
  }

  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }

  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}

export default LifecycleExample;
