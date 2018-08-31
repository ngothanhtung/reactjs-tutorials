import { connect } from 'react-redux';
import { getUsersAsync, deleteUserAsync, selectUser } from '../actions/userAction';
import UserComponent from '../components/UserComponent';

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  users: state.userReducer.users,
  loading: state.userReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getUsersAsync: () => dispatch(getUsersAsync()),
  deleteUserAsync: (id) => dispatch(deleteUserAsync(id)),
  selectUser: (user) => dispatch(selectUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);


