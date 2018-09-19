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
        cover={<img alt="" src={this.props.product.imageUrl} />}
        actions={[
          <Link to={`/products/${this.props.product._id}`}><Icon type="setting" /></Link>,
          <Icon type="edit" />,
          <Icon type="ellipsis" />
        ]}
      >
        <Meta
          title={this.props.product.name}
          description={this.props.product.price}
        />
      </Card>
    );
  }
}
