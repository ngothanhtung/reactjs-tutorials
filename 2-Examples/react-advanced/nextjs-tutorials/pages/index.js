import React, { Component } from 'react';
import Link from 'next/link';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import SiteLayout from '../components/SiteLayout';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  render() {
    return (
      <SiteLayout selectedKeys={['home']}>
        <h1>Home</h1>
      </SiteLayout>
    )
  }
}
