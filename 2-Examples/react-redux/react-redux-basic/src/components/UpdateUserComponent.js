import React, { Component } from 'react';

export default class UpdateUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName: '',
        password: '123456789',
        fullName: '',
        email: '',
        phoneNumber: '',
      }
    }   
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.selectedUser !== this.props.selectedUser){
      //Perform some operation here
      this.setState({user: this.props.selectedUser});
    }
  }

  handleChange(field, event) {
    var object = this.state.user;
    object[field] = event.target.value;
    this.setState({ user: object });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.updateUserAsync(this.props.selectedUser._id, this.state.user);
        }}
        >
          <div className="form-group">
            <label>Full Name:</label>
            <input type="text" className="input form-control" value={ this.state.user.fullName } onChange={this.handleChange.bind(this, 'fullName')} />
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
