import React, { Component } from 'react';
const styles = {
  ImageBlock: {
    width: '100%',
    border: 'solid 1px red'
  }
};
class Product extends Component {
  render() {
    return (
      <div className='ProductBlock'>
        <h4>{this.props.sanpham.name}</h4>
        <img style={styles.ImageBlock} alt="" src='http://via.placeholder.com/260x160' />

        <p>Price: {this.props.sanpham.price}</p>
        <p>
          <button className="btn btn-sm btn-primary" onClick={this.props.onAddToCart.bind(this, this.props.sanpham)}>
            <span className="glyphicon glyphicon-shopping-cart"></span> Add to cart
          </button>
        </p>
      </div>
    );
  }

}
export default Product;
