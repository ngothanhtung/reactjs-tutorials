import React, { Component } from 'react';
import axios from 'axios';
const apiUrl = 'http://localhost:9000/mongodb/products';

export default class CallExpressjsAPIExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: false,
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({ loading: true });
          axios.get(apiUrl)
            .then(response => {
              console.log(response.data);
              this.setState({ products: response.data });
              this.setState({ loading: false });
            });
        }}>
          GET
        </button>

        <button onClick={() => {
          this.setState({ loading: true });
          axios.post(apiUrl, {
            name: 'Nokia 9',
            price: 900,
            discount: 15
          })
            .then(response => {
              console.log(response.data);
              this.setState({ loading: false });
            });
        }}>
          CREATE
        </button>
        {
          this.state.loading &&
          <h1>Loading ...</h1>
        }
        <hr />
        <table className="table table-bordered">
          <tbody>
            {
              (this.state.loading === false) && this.state.products.map((item, index) => (
                <tr key={index}>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.discount}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}
