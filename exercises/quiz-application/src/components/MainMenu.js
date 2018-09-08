import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class MainMenu extends Component {
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
      <Menu theme="dark" mode="horizontal" style={{ lineHeight: '48px' }} onClick={this.handleClick} selectedKeys={[this.state.selectedKey]} >
        <Menu.Item key="home">
          <Link to="/">
            <Icon type="home" />Home
            </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about"><Icon type="global" />About</Link>
        </Menu.Item>
      </Menu>
    )
  }
};
