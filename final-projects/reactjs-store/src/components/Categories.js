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
      current: 'mail',
    }
  }

  componentWillMount() {
    axios.get(url).then(response => {
      const data = response.data;
      this.setState({ categories: data });
    });
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >

          {
            this.state.categories &&
            this.state.categories.map((item, index) => (
              <Menu.Item key={item._id}>

                <Link key={item._id} to={`/categories/${item._id}/products`}>
                  <Icon type={item.iconType} />{item.name}
                </Link>
              </Menu.Item>


            ))

          }


        </Menu>


      </div>
    );
  }
}