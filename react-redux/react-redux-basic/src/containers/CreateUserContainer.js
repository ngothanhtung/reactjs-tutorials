import { connect } from 'react-redux';
import { createUserAsync, editUser } from '../actions/userAction';
import CreateUserComponent from '../components/CreateUserComponent';

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  loading: state.userReducer.loading,
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  createUserAsync: (user) => dispatch(createUserAsync(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserComponent);


