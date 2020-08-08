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
      render: text => <strong>{text}</strong>,
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
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
        <div>
          <Table columns={columns} dataSource={this.props.addedProducts} />
        </div>
        <div style={{ textAlign: 'center', padding: 24 }}>
          <Link to="/check-out">
            Check out
          </Link>
        </div>
      </div >
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

