import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Badge } from 'antd'
import { addToCart } from '../modules/shoppingCart/actions';

class ShoppingCartBadge extends Component {
  render() {
    return (
      <div>
        <Badge count={this.props.addedProducts.length} />
      </div>
    )
  }
}



const mapStateToProps = (state) => ({
  addedProducts: state.shoppingCartReducer.addedProducts,
  // total: state.shoppingCartReducer.total,
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  // addToCart: (product, quantity) => dispatch(addToCart(product, quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartBadge);

