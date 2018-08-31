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
              this.props.users.map((item, index) =>
                <tr key={index}>
                  <td>
                    <button className="btn btn-sm btn-danger" onClick={() => {
                      this.props.selectUser(item);

                    }}>Select</button>
                  </td>
                  <td>{item._id}</td>
                  <td>{item.userName}</td>
                  <td>{item.fullName}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNumber}</td>
                  <td style={{ width: '1%' }}>
                    <button className="btn btn-sm btn-danger" disabled={this.props.loading} onClick={() => {
                      if (window.confirm('Are you sure you wish to delete this item?')) {
                        this.props.deleteUserAsync(item._id);
                      }
                    }}>Delete</button>
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
