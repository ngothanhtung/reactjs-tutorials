import React, { Component } from 'react';
import axios from 'axios';

import './style.css';

const apiUrl = 'https://slacklivechat.com/users';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      users: [],
      user: {
        userName: '',
        password: '123456789',
        fullName: '',
        email: '',
        phoneNumber: '',
      }
    }

    this.getData = this.getData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  getData() {
    axios.get(apiUrl)
      .then(response => {
        console.log(response);
        this.setState({ users: response.data });
        this.setState({ loading: false });
      })
      .catch(error => {
        this.setState({ loading: false, error: error });
        console.log(error);
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    var component = this;

    axios.post(apiUrl, { user: this.state.user })
      .then(response => {
        console.log(response);
        var users = component.state.users;
        users.push(response.data);
        component.setState({ users: users });
      })
      .catch(error => console.log(error));
  }

  handleChange(field, event) {
    var object = this.state.user;
    object[field] = event.target.value;
    this.setState({ user: object });
  }

  //DELETE
  handleDelete(id, event) {
    var component = this;
    axios.delete(apiUrl + '/' + id)
      .then(response => {
        console.log(response);
        var users = component.state.users;
        for (var i = 0; i < users.length; i++) {
          if (users[i]._id === id) {
            users.splice(i, 1);
            component.setState({ users: users });
            return false;
          }
        }
      }).catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    if (this.state.loading === false) {
      return (
        <div className="container">
          <h1>Users</h1>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((item, index) =>
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.fullName}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNumber}</td>
                  <td style={{ width: '1%' }}>
                    <button className="btn btn-sm btn-danger" onClick={this.handleDelete.bind(this, item._id)}>Delete</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <hr />
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Full Name:</label>
              <input type="text" className="input form-control" value={this.state.user.fullName} onChange={this.handleChange.bind(this, 'fullName')} />
            </div>
            <div className="form-group">
              <label>Username:</label>
              <input type="text" className="input form-control" value={this.state.user.userName} onChange={this.handleChange.bind(this, 'userName')} />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="text" className="input form-control" value={this.state.user.email} onChange={this.handleChange.bind(this, 'email')} />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input type="text" className="input form-control" value={this.state.user.phoneNumber} onChange={this.handleChange.bind(this, 'phoneNumber')} />
            </div>
            <div>
              <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      );
    }
    else {
      return (<h1>Loading ...</h1>);
    }
  }
}
export default App;
