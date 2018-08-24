// https://reacttraining.com/react-router/web/example/basic

import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import App from '../App';
import About from '../About';
import Music from '../AudioPlayerExamples';

import './style.css';

export default class RouterExamples extends Component {
	render() {
		return (
			<Router>
				<div>
					<div>
						<div className="btn-group" role="group">
							<button type="button" className="btn btn-primary"><Link style={{ color: 'white', textDecoration: 'none' }} to="/">Home</Link></button>
							<button type="button" className="btn btn-primary"><Link style={{ color: 'white', textDecoration: 'none' }} to="/about">About</Link></button>
							<button type="button" className="btn btn-primary"><Link style={{ color: 'white', textDecoration: 'none' }} to="/topics">Topics</Link></button>
							<button type="button" className="btn btn-primary"><Link style={{ color: 'white', textDecoration: 'none' }} to="/music">Music</Link></button>
						</div>

						<hr />

						<Route exact path="/" component={App} />
						<Route path="/about" component={About} />
						<Route path="/topics" component={Topics} />
						<Route path="/music" component={Music} />
					</div>
					{/* PLAYER */}
					<div style={{ marginBottom: 160 }}>
						<div className="footer">
							<div style={{ paddingLeft: 8, paddingRight: 8, backgroundColor: '#EFF1F2' }}>
								<div style={{ textAlign: 'center', padding: 4 }}>
									{/* <strong style={{ fontSize: 12 }}>{this.state.active.title} - {this.state.active.artist}</strong> */}
									<strong id="song-name" style={{ fontSize: 12 }}></strong>
								</div>
								<audio id="music-player" controls src='' autoPlay='true' preload="auto" ref="player"></audio>
							</div>
						</div>
					</div>
				</div>
			</Router>
		)
	}
}

const Topics = ({ match }) => (
	<div>
		<h2>Topics</h2>
		<ul>
			<li>
				<Link to={`${match.url}/rendering`}>
					Rendering with React
        </Link>
			</li>
			<li>
				<Link to={`${match.url}/components`}>
					Components
        </Link>
			</li>
			<li>
				<Link to={`${match.url}/props-v-state`}>
					Props v. State
        </Link>
			</li>
		</ul>

		<Route path={`${match.url}/:topicId`} component={Topic} />
		<Route exact path={match.url} render={() => (
			<h3>Please select a topic.</h3>
		)} />
	</div>
)

const Topic = ({ match }) => (
	<div>
		<h3>{match.params.topicId}</h3>
	</div>
)

