import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const navMenuItems = [
  {
    key: 'home',
    label: 'Trang chủ',
  },
  {
    key: 'about',
    label: 'Giới thiệu',
  },
  {
    key: 'settings',
    label: 'Cài đặt',
  },
];

const sideMenuItems = [
  {
    key: 'categories',
    label: 'Categories',
  },
  {
    key: 'suppliers',
    label: 'Suppliers',
  },
  {
    key: 'products',
    label: 'Products',
  },
  {
    key: 'employees',
    label: 'Employees',
  },
  {
    key: 'customers',
    label: 'Customers',
  },
  {
    key: 'orders',
    label: 'Orders',
  },
];

type Props = {};

export default function MainLayout({}: Props) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Menu
          style={{ flex: 1 }}
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['home']}
          items={navMenuItems}
          onSelect={(item) => {
            console.log(item.key);
            navigate('/' + item.key);
          }}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode='inline'
              defaultSelectedKeys={[location.pathname.replace('/online-shop/', '')]}
              defaultOpenKeys={['categories']}
              style={{ height: '100%' }}
              items={sideMenuItems}
              onSelect={(item) => {
                console.log(item.key);
                navigate('/online-shop/' + item.key);
              }}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
}
