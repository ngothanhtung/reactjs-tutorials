import React, { Component } from 'react';
import { Card, Icon } from 'antd';
import { Link } from 'react-router-dom'
const { Meta } = Card;

export default class Product extends Component {

  render() {
    return (
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <Link to={`/products/${this.props.product._id}`}>
            <img alt="Product Picture" src={this.props.product.imageUrl} />
          </Link>
        }
        actions={[
          <Link to={`/products/${this.props.product._id}`}><Icon type="arrow-right" /></Link>,
          <Icon type="heart" />,
          <Icon type="shopping-cart" />
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
