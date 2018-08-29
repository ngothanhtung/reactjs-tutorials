import React, { Component } from 'react';


export default class componentName extends Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.createUserAsync}>
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
}
