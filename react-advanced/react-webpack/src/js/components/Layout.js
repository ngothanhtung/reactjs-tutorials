import React from "react";
import Header from "./Header";

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'William'
		}
	}
	render() {
		return (
			<h1>It's {this.state.name}!</h1>
		);
	}
}
