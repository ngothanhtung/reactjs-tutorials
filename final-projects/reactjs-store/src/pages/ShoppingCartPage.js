import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { List, Avatar, Icon, Table, Divider } from 'antd';


class ShoppingCartPage extends Component {
  render() {

    const columns = [{
      title: 'Name',
      dataIndex: 'product.name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: 'Price',
      dataIndex: 'product.price',
      key: 'price',
    }, {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;"> + </a>
          <Divider type="vertical" />
          <a href="javascript:;"> - </a>
        </span>
      ),
    }];

    return (
      <div style={{ display: 'flex', flex: 1 }}>
        <Table columns={columns} dataSource={this.props.addedProducts} />
        <Link to="/check-out">
          Check out
        </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartPage);

