import { connect } from 'react-redux';
import { updateUserAsync } from '../actions/userAction';
import UpdateUserComponent from '../components/UpdateUserComponent';

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  loading: state.userReducer.loading,
  selectedUser: state.userReducer.selectedUser,
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  updateUserAsync: (id, user) => dispatch(updateUserAsync(id, user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserComponent);


