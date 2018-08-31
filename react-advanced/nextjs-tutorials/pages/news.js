import React, { Component } from 'react';
import SiteLayout from '../components/SiteLayout';
export default class News extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SiteLayout>
        <h1>News</h1>
      </SiteLayout>
    )
  }
}
