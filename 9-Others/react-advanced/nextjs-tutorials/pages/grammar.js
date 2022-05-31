import React, { Component } from 'react';
import Link from 'next/link';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import SiteLayout from '../components/SiteLayout';

export default class Grammar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SiteLayout selectedKeys={['grammar']}>
        <h1>Grammar</h1>
      </SiteLayout>
    )
  }
}
