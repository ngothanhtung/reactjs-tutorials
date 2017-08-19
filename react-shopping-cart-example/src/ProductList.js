import React, {Component} from 'react';
import Product from './Product';

class ProductList extends Component {
    render() {
        return (
            <div className='row'>
                {this.props.data.map(p => <Product onAddToCart={function (e) {
                    this.props.onAddToCart(e)
                }.bind(this)} key={p.id} product={p}/>)}
            </div>
        );
    }

}

export default ProductList;
