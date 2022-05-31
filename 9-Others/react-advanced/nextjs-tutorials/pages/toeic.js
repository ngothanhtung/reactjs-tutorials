import React, { Component } from 'react';
import SiteLayout from '../components/SiteLayout';

export default class Toeic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SiteLayout selectedKeys={['toeic']}>
        <h1>Toeic</h1>
      </SiteLayout>
    )
  }
}
