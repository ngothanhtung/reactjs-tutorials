import React, {Component} from 'react';
import Product from './Product';

class ProductList extends Component {
    render() {
        return (
            <div className="row">
              {
                this.props.data.map((p) =>
                  <div className="col-md-6" key={p.id}>
                    <Product onAddToCart={this.props.onAddToCart.bind(this, p)} product={p}/>
                  </div>
                )
              }
            </div>
        );
    }
}

export default ProductList;
