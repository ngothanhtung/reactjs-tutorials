// https://reacttraining.com/react-router/web/example/basic

import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MusicPage from './pages/MusicPage';
import TopicsPage from './pages/TopicsPage';
import './style.css';

export default class RouterExamples extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<div>
						<div className="btn-group" role="group">
							<button type="button" className="btn btn-primary"><Link style={{ color: 'white', textDecoration: 'none' }} to="/">Home</Link></button>
							<button type="button" className="btn btn-primary"><Link style={{ color: 'white', textDecoration: 'none' }} to="/about">About</Link></button>
							<button type="button" className="btn btn-primary"><Link style={{ color: 'white', textDecoration: 'none' }} to="/topics">Topics</Link></button>
							<button type="button" className="btn btn-primary"><Link style={{ color: 'white', textDecoration: 'none' }} to="/music">Music</Link></button>
						</div>
						<hr />

						<Route exact path="/" component={HomePage} />
						<Route path="/topics" component={TopicsPage} />
						<Route path="/music" component={MusicPage} />
					</div>
					{/* PLAYER */}
					<div style={{ marginBottom: 160 }}>
						<div className="footer">
							<div style={{ paddingLeft: 8, paddingRight: 8, backgroundColor: '#EFF1F2' }}>
								<div style={{ textAlign: 'center', padding: 4 }}>
									<strong id="song-name" style={{ fontSize: 12 }}></strong>
								</div>
								<audio id="music-player" controls src='' autoPlay='true' preload="auto" ref="player"></audio>
							</div>
						</div>
					</div>
				</div>
			</BrowserRouter>
		)
	}
}