import React, { Component } from 'react';
import GalleryList from './GalleryList';
import { client } from '../../client';
const url = '/getImages';

class GalleryIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [],
			open: false,
			loading: true
		};
	}

	componentWillMount() {
		client.get(url).then(res => {
			const images = (res.data);
			this.setState({ loading: false });
			this.setState({ images: images });
		});
	}

	render() {
		if (this.state.loading === false) {
			return (
				<div style={{ "marginBottom": "30px" }}>
					<h6>Firebase - Cloud FireStore Examples</h6>
					<GalleryList images={this.state.images} />
				</div>
			);
		} else {
			return (
				<p>Loading ...</p>
			);
		}
	}
}

export default GalleryIndex;