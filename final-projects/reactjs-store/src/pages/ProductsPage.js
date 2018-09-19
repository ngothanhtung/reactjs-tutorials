import React, { Component } from 'react';
import axios from 'axios';

import Products from '../components/Products';

export default class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
    };
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    const url = `http://localhost:9000/categories/${id}/products`;
    axios.get(url).then(response => {
      console.log('PRODUCTS', response.data);
      this.setState({ products: response.data });
    });
  }

  componentDidUpdate(nextProps, nextState) {
    if (nextProps.match !== this.props.match) {
      const id = this.props.match.params.id;
      const url = `http://localhost:9000/categories/${id}/products`;
      axios.get(url).then(response => {
        console.log('PRODUCTS', response.data);
        this.setState({ products: response.data });
      });
    }
  }


  render() {
    return (
      <div>
        <h1> ProductsPage </h1>
        <Products products={this.state.products} />
      </div>
    );
  }
}
