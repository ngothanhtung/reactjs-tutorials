import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

import './style.css';

const apiUrl = 'https://slacklivechat.com/users';
// POST, GET, PUT, DELETE

class AxiosExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      mode: 'insert',
      users: [],
      editId: '',
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
    const component = this;
    if (this.state.mode === 'insert') {
      axios.post(apiUrl, { user: this.state.user })
        .then(response => {
          console.log(response);
          var users = component.state.users;
          users.push(response.data);
          component.setState({ users: users });
        })
        .catch(error => console.log(error));
    } else if (this.state.mode === 'edit') {
      axios.put(apiUrl + '/' + this.state.editId, { user: this.state.user })
        .then(response => {
          console.log(response);
          var users = component.state.users;
          for (var i = 0; i < users.length; i++) {
            if (users[i]._id === this.state.editId) {
              users[i] = response.data;
              component.setState({ users: users });
              // RESET FORM
              component.setState({ mode: 'insert' });
              component.setState({
                user: {
                  userName: '',
                  password: '123456789',
                  fullName: '',
                  email: '',
                  phoneNumber: '',
                }
              });
              return false;
            }
          }
        })
        .catch(error => console.log(error));
    }
  }


  //DELETE
  handleDelete(id, event) {
    if (window.confirm('Are you sure you wish to delete this item?')) {
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
  }

  //SELECT
  handleSelect(id, event) {
    var users = this.state.users;
    for (var i = 0; i < users.length; i++) {
      if (users[i]._id === id) {
        this.setState({
          user: {
            // Not include _id
            userName: users[i].userName,
            fullName: users[i].fullName,
            password: users[i].password,
            email: users[i].email,
            phoneNumber: users[i].phoneNumber,
          }
        });
        this.setState({ mode: 'edit' });
        this.setState({ editId: id });
        return false;
      }
    }
  }

  handleChange(field, event) {
    var object = this.state.user;
    object[field] = event.target.value;
    this.setState({ user: object });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    if (this.state.loading === false) {
      return (
        <div>
          <h1>Users</h1>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Id</th>
                <th>Username</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.users.map((item, index) =>
                  <tr key={item._id}>
                    <td>
                      <button className="btn btn-sm btn-danger" onClick={this.handleSelect.bind(this, item._id)}>Select</button>
                    </td>
                    <td>{item._id}</td>
                    <td>{item.userName}</td>
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
export default AxiosExamples;
