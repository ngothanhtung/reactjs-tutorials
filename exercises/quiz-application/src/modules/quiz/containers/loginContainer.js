import { connect } from 'react-redux';
import { loginAsync } from '../actions/loginActions';
import LoginComponent from '../components/LoginComponent';

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  loading: state.loginReducer.loading,
  loggedInUser: state.loginReducer.loggedInUser,
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  loginAsync: (email, password) => dispatch(loginAsync(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);