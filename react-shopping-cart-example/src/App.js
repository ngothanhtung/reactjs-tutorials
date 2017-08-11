import React, { Component } from 'react';
import ProductList from './ProductList';
//import logo from './logo.svg';
import './App.css';

const PRODUCTS = [
  {
    id: 1,
    name: 'iphone 8',
    price: 1200
  },
  {
    id: 2,
    name: 'iphone 7',
    price: 1000
  },
   {
    id: 3,
    name: 'iphone 6',
    price: 700
  }
];


class App extends Component {
  constructor() {
    super();

    for (var i = 4; i <= 100; i++){
      PRODUCTS.push({
        id: i,
        name: 'PRODUCT ' + i,
        price: 1000
      });
    }
  }

  onAddToCart(id) {
    // this.state.CartItems.push(p);
    // this.setState(this.state);
    console.log("Add to cart from App", id.target);
  }

  render() {
    return (
      <div className="App">
        <ProductList onAddToCart={function(id){this.onAddToCart(id)}.bind(this)} data={PRODUCTS} />
      </div>
    );
  }
}

export default App;
