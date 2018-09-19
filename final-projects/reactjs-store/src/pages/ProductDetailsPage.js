import React, { Component } from 'react'

export default class ProductDetailsPage extends Component {
  render() {
    return (
      <div>
        <h1>Details</h1>
        {this.props.match.params.id}
      </div>
    )
  }
}
