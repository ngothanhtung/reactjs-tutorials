import React, { Component } from 'react';
import { Card, Icon, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../modules/shoppingCart/actions';
const { Meta } = Card;

class Product extends Component {

  render() {
    return (
      <Card
        hoverable
        cover={
          <Link to={`/products/${this.props.product._id}`}>
            <div style={{ minHeight: 200 }}>
              <img alt="Product Picture" style={{ width: '100%' }} src={this.props.product.imageUrl} />
            </div>
          </Link>
        }
        actions={[
          <Link to={`/products/${this.props.product._id}`}><Icon type="arrow-right" /></Link>,
          <Icon type="heart" />,
          <Icon type="shopping-cart" onClick={() => {
            this.props.addToCart(this.props.product, 1);
          }} />
        ]}
      >

        <Meta
          title={this.props.product.name}
          description={`Price: ${this.props.product.price}`}
        />
        <div style={{ paddingTop: 12 }}>
          <p>Description here ...</p>
        </div>
      </Card>
    );
  }
}


const mapStateToProps = (state) => ({
  // addedProducts: state.shoppingCartReducer.addedProducts,
  // total: state.shoppingCartReducer.total,
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  addToCart: (product, quantity) => dispatch(addToCart(product, quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);

