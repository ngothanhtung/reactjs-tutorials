/*
Handling events with React elements is very similar to handling events on DOM elements.
There are some syntactic differences:
  - React events are named using camelCase, rather than lowercase.
  - With JSX you pass a function as the event handler, rather than a string.
*/

import React, { Component } from 'react';

class EventExample extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0
		}

		this.updateState = this.updateState.bind(this);

	};

	updateState() {
		// setState() method is used for updating the state of the component. 
		// This method will not replace the state but only add changes to original state.
		this.setState({ count: this.state.count + 1 })
	}

	render() {
		return (
			<div>
				<button onClick={this.updateState}>CLICK ME</button>
				<h4>{this.state.count}</h4>
				<Content myDataProp={this.state.count} updateStateProp={this.updateState}></Content>
			</div>
		);
	}
}

class Content extends React.Component {
	render() {
		return (
			<div>
				<button onClick={this.props.updateStateProp}>CLICK ME (CHILD)</button>
				<h3>{this.props.myDataProp}</h3>
			</div>
		);
	}
}


export default EventExample;
