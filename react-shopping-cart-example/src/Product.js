import React, {Component} from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        //this.onAddToCart = this.onAddToCart.bind(this);
    }

    // onAddToCart() {
    //   console.log(this.props.product.id);
    // }
    render() {
        return (
            <div className='col-md-4 ProductBlock'>
                <img alt="" src='http://via.placeholder.com/220x160'/>
                <h3>{this.props.product.name}</h3>
                <p>{this.props.product.price}</p>
                <p>
                    <button className="btn btn-sm btn-danger" onClick={this.props.onAddToCart.bind(this, this.props.product)}>Add to cart
                    </button>
                </p>
            </div>
        );
    }

}
export default Product;
