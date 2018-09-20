import React, { Component } from 'react';
import axios from 'axios';
import { Layout, Spin } from 'antd'

import Products from '../components/Products';

export default class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
    };
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    const url = `http://localhost:9000/categories/${id}/products`;
    axios.get(url).then(response => {
      this.setState({ products: response.data });
    });
  }

  componentDidUpdate(nextProps, nextState) {
    if (nextProps.match !== this.props.match) {
      const id = this.props.match.params.id;
      const url = `http://localhost:9000/categories/${id}/products`;
      axios.get(url).then(response => {
        this.setState({ products: response.data });
      });
    }
  }


  render() {
    return (
      <Layout.Content>
        {!this.state.products && <div style={{ padding: 60, display: 'flex', flex: 1, justifyContent: 'center' }}><Spin size="large" /></div>}
        <Products products={this.state.products} />
      </Layout.Content>
    );
  }
}
