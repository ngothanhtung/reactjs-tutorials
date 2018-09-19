import React, { Component } from 'react';
import Product from './Product';

import { Col, Row } from 'antd';

export default class Products extends Component {
  render() {
    return (
      <Row gutter={16}>
        {
          this.props.products && this.props.products.map((item, index) => (
            <Col key={item._id} md={{ span: 8 }} span={8}>
              <Product product={item} />
            </Col>
          ))
        }
      </Row>

    );
  }
}
