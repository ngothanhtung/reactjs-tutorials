import React, { Component } from 'react';
import CheckBox from './CheckBox';
import TextInput from './TextInput';

export default class FormExample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			checked: true,
		}

		// binding handle
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		console.log('Data was submitted', this.state);
		e.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<TextInput placeholderText="Username" value={this.state.text} onChange={(text) => this.setState({ text: text })} />
				<CheckBox checked={this.state.checked} label="Check me out" onChange={(checked) => this.setState({ checked: checked })} />
				<hr />
				<input type="submit" value="Submit" />
			</form>
		);
	}
}
