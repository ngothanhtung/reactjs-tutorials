import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ComponentAPIExample extends Component {
	constructor() {
		super();

		this.state = {
			data: []
		}

		// bind events
		this.setStateHandler = this.setStateHandler.bind(this);
		this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
		this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
	};

	setStateHandler() {
		var item = "setState...";
		var myArray = this.state.data;
		myArray.push(item);
		this.setState({ data: myArray });
	};

	forceUpdateHandler() {
		this.forceUpdate();
	};

	findDomNodeHandler() {
		var myDiv = document.getElementById('myDiv');
		//For DOM manipulation, we can use ReactDOM.findDOMNode() method
		ReactDOM.findDOMNode(myDiv).style.color = 'green';
	}

	render() {
		return (
			<div>
				<button onClick={this.setStateHandler}>SET STATE</button>
				<h4>State Array: {this.state.data}</h4>
				<div>
					<button onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
					<h4>Random number: {Math.random()}</h4>
				</div>
				<div>
					<button onClick={this.findDomNodeHandler}>FIND DOME NODE</button>
					<div id="myDiv">NODE</div>
				</div>
			</div>
		);
	}
}

export default ComponentAPIExample;
