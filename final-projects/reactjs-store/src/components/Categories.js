import React, { Component } from 'react';
import axios from 'axios';

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
    })
  }

  render() {
    return (
      <div>
        {
          this.state.categories &&
          <div>
            {
              this.state.categories.map((item, index) => (
                <div style={{ float: 'left', height: 48, padding: 8, backgroundColor: '#dfe6e9' }} key={index}>
                  <span style={{ fontWeight: '700' }}>
                    {item.name}
                  </span>
                </div>
              ))
            }
          </div>
        }
      </div>
    );
  }
}