import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import Categories from './components/Categories';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

import { Button } from 'antd';

const url = 'http://localhost:9000/products';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null
    }
  }

  componentWillMount() {
    axios.get(url).then(response => {
      console.log(response.data);
      this.setState({ products: response.data });
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Categories />
          </div>
          <div style={{ padding: 24, backgroundColor: 'yellow' }}>
            <Route exact path="/" component={HomePage} />
            <Route path="/categories/:id/products" component={ProductsPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
