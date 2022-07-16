import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  render() {
    return (
      <div className="row">
        {
          this.props.products.map((p) =>
            <div className="col-xs-6 " key={p.id}>
              <Product onAddToCart={this.props.onAddToCart.bind(this, p)} sanpham={p} />
            </div>
          )
        }
      </div>
    );
  }
}

export default ProductList;
