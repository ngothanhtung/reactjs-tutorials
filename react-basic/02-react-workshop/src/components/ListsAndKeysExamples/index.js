/*
React keys are useful when working with dynamically created components or when your lists are altered by users.
Setting the key value will keep your components uniquely identified after the change.
*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class KeysExample extends Component {
	constructor() {
		super();

		this.state = {
			data:
				[
					{
						component: 'First...',
						id: 1
					},

					{
						component: 'Second...',
						id: 2
					},

					{
						component: 'Third...',
						id: 3
					}
				]
		}

	}

	render() {
		return (
			<div>
				<div>
					{
						this.state.data.map((item, index) =>
							<Content key={index} componentData={item} />)
					}
				</div>
			</div>
		);
	}
}

class Content extends React.Component {
	render() {
		return (
			<div>
				<h2>{this.props.componentData.component}</h2>
				<h3>{this.props.componentData.id}</h3>
				<hr />
			</div>
		);
	}
}

export default KeysExample;
