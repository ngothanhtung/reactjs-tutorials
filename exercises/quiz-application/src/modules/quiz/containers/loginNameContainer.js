import { connect } from 'react-redux';

import LoginNameComponent from '../components/LoginNameComponent';

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  loggedInUser: state.loginReducer.loggedInUser,
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  // loginAsync: (email, password) => dispatch(loginAsync(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginNameComponent);