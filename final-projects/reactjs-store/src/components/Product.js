import React, { Component } from 'react';


export default class Product extends Component {

  render() {
    return (
      <div>
        <h3>
          {this.props.product.name}
        </h3>
        <h4>
          {this.props.product.price}
        </h4>
        <p>
          <img src={this.props.product.imageUrl} style={{ width: 300 }} />
        </p>
      </div>
    );
  }
}
