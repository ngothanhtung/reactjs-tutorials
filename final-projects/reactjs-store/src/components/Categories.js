import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const url = 'http://localhost:9000/categories';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: null,
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
      <div>
        {
          this.state.categories &&
          <div style={{ display: 'flex', backgroundColor: '#dfe6e9' }}>
            {
              this.state.categories.map((item, index) => (
                <Link key={item._id} to={`/categories/${item._id}/products`}>
                  <div style={{ float: 'left', padding: 16, backgroundColor: '##dfe6e9' }}>
                    <span style={{ fontWeight: '700' }}>
                      {item.name}
                    </span>
                  </div>
                </Link>
              ))
            }
          </div>
        }
      </div>
    );
  }
}