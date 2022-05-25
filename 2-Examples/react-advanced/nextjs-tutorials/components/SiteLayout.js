import React, { PureComponent } from 'react';
import Link from 'next/link';
import stylesheet from 'antd/dist/antd.min.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default class SiteLayout extends PureComponent {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={this.props.selectedKeys}
            selectedKeys={this.props.selectedKeys}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="home"><Link href="/"><a>Home</a></Link></Menu.Item>
            <Menu.Item key="news"><Link href="/news"><a>News</a></Link></Menu.Item>
            <Menu.Item key="toeic"><Link href="/toeic"><a>Toeic</a></Link></Menu.Item>
            <Menu.Item key="grammar"><Link href="/grammar"><a>Grammar</a></Link></Menu.Item>
            <Menu.Item key="about"><Link href={{ pathname: '/about', query: { name: 'Zeit' } }}><a>About</a></Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0', height: '100%', display: 'flex' }}>
          <Layout style={{ padding: '0', background: '#fff' }}>
            <Sider width={220} style={{ background: '#fff', height: '100%', }}>
              <Menu
                mode="inline"
                theme="light"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', height: '100%' }}>
              {this.props.children}
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Softech Aptech ©2018 Created by Nextjs.org
        </Footer>
      </Layout >
    )
  }
}