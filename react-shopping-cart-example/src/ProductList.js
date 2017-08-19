import React, {Component} from 'react';
import Product from './Product';

class ProductList extends Component {
    render() {
        return (
            <div>
                {
                  this.props.data.map((p) =>
                    <Product onAddToCart={this.props.onAddToCart.bind(this, p)} key={p.id} product={p}/>
                  )
                }
            </div>
        );
    }

}

export default ProductList;
