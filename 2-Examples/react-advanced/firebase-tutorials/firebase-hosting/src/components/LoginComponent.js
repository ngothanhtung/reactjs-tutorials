import React from 'react';
class LoginComponent extends React.Component {
  render() {
    console.log(this.props.user);
    return (
      <div style={{ minHeight: '48px' }} className='text-center'>
        <img src={this.props.user.photoURL} style={{ width: '100%' }} />
        <div>
          <span className='text-bold'>{this.props.user.displayName}</span>
        </div>
      </div>
    );
  }
}
export default LoginComponent;