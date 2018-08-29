import React, { Component } from 'react';

export default class UserComponent extends Component {
  componentWillMount() {
    this.props.getUsersAsync();
  }

  render() {
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
              (this.props.loading === false) && this.props.users.map((item, index) =>
                <tr key={index}>
                  <td>
                    <button className="btn btn-sm btn-danger">Select</button>
                  </td>
                  <td>{item._id}</td>
                  <td>{item.userName}</td>
                  <td>{item.fullName}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNumber}</td>
                  <td style={{ width: '1%' }}>
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              )}
          </tbody>
        </table>

        <hr />
      </div>
    );
  }
}
