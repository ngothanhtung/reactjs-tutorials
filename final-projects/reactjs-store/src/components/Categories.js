import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const url = 'http://localhost:9000/categories';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: null,
      current: '',
    }
  }

  componentWillMount() {
    axios.get(url).then(response => {
      const data = response.data;
      this.setState({ categories: data });
    });
  }

  render() {
    return (
      <Menu
        selectedKeys={[this.state.current]}
        mode="horizontal"
        theme="light"
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="homepage">
          <Link to="/">
            <Icon type="home" />Home
          </Link>
        </Menu.Item>
        {
          this.state.categories &&
          this.state.categories.map((item, index) => {
            if (item.subCategories) {
              return (
                <SubMenu key={item._id} title={<span><Icon type={item.iconType} /><span>{item.name}</span></span>}>
                  {
                    item.subCategories.map((subItem, index) => (
                      <Menu.Item key={subItem._id}>
                        <Link key={subItem._id} to={`/categories/${subItem._id}/products`}>
                          <Icon type={subItem.iconType} />{subItem.name}
                        </Link>
                      </Menu.Item>
                    ))
                  }
                </SubMenu>
              )
            } else {
              return (
                <Menu.Item key={item._id}>
                  <Link key={item._id} to={`/categories/${item._id}/products`}>
                    <Icon type={item.iconType} />{item.name}
                  </Link>
                </Menu.Item>
              )
            }
          })
        }
      </Menu>
    );
  }
}