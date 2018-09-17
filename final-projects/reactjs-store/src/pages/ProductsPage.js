import React, { Component } from 'react';
import axios from 'axios';

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

  render() {
    return (
      <div>
        <h1> ProductsPage </h1>
        {
          this.state.products && this.state.products.map((item, index) => (
            <div key={item._id}>
              <h3>
                {item.name}
              </h3>
              <h4>
                {item.price}
              </h4>
              <p>
                <img src={item.imageUrl} style={{ width: 300 }} />
              </p>
            </div>
          ))
        }
      </div>
    );
  }
}
