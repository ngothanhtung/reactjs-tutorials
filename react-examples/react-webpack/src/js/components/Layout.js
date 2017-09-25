import React from "react";
import Header from "./Header";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.name = "Will";
	}
	render() {
		const name = "Will";
		return (
			<h1>It's {this.name}!</h1>
		);
	}
}
