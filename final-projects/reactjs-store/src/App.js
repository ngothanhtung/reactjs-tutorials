import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import Categories from './components/Categories';

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
      <div className="App">
        <div>
          <Categories />
        </div>
        {
          this.state.products &&
          <div>
            {
              this.state.products.map((item, index) => (
                <div key={index}>
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <p>
                    <img src={item.imageUrl} />
                  </p>
                </div>
              ))
            }
          </div>
        }
      </div>
    );
  }
}

export default App;
