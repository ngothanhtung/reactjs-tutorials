import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './index.css';
import logo from '../../assets/logo.svg';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class MainSider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: this.props.selectedKey,
    }
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      selectedKey: e.key,
    });
  }

  render() {
    return (
      <Sider
        className="sider"
        trigger={null}
        collapsible
        collapsed={false}
        breakpoint="lg"
        width={256}
      >
        <div className="logo" key="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
            <h1>Ant Design Pro</h1>
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          onClick={this.handleClick}
          defaultSelectedKeys={[this.state.selectedKey]}
          defaultOpenKeys={[this.state.selectedKey]}
          style={{ height: '100%', borderRight: 0 }}
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
    )
  }
};
