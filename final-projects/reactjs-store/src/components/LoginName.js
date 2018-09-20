import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class LoginName extends Component {
  render() {
    return (
      <div>
        {
          this.props.loggedInUser && (this.props.loggedInUser.length > 0) &&
          <span>
            {this.props.loggedInUser[0].email}
          </span>
        }
        {
          !this.props.loggedInUser &&
          <Link to="/login">
            Login
          </Link>
        }
      </div>
    )
  }
}




const mapStateToProps = (state) => ({
  loggedInUser: state.authReducer.loggedInUser,
  // total: state.shoppingCartReducer.total,
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  // addToCart: (product, quantity) => dispatch(addToCart(product, quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginName);

