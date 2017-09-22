import React, {Component} from 'react';
const styles = {
  ImageBlock: {
    width: '100%'
  }
};
class Product extends Component {
    render() {
        return (
            <div className='ProductBlock'>
                <img style={styles.ImageBlock} alt="" src='http://via.placeholder.com/260x120'/>
                <h4>{this.props.product.name}</h4>
                <p>Price: {this.props.product.price}</p>
                <p>
                    <button className="btn btn-sm btn-primary" onClick={this.props.onAddToCart.bind(this, this.props.product)}>
                      <span className="glyphicon glyphicon-shopping-cart"></span> Add to cart
                    </button>
                </p>
            </div>
        );
    }

}
export default Product;
