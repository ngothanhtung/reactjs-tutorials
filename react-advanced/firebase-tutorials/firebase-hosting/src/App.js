import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

// Components
import NavigationComponent from './components/NavigationComponent';
import Home from './pages/Home';
import Login from './pages/Login';
import Storage from './pages/Storage';
import Gallery from './pages/Gallery';
import GalleryManagement from './pages/Gallery/GalleryManagement';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { open: false };
	}

	handleToggle = () => this.setState({ open: !this.state.open });

	render() {
		return (
			<Router>
				<div className="container">
					<div>
						<NavigationComponent />
					</div>
					<div>
						<Route exact path="/" component={Home} />
						<Route exact path="/gallery" component={Gallery} />
						<Route exact path="/gallery/management" component={GalleryManagement} />
						<Route path="/storage" component={Storage} />
						<Route path="/login" component={Login} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
