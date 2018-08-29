import { connect } from 'react-redux';
import { createUsersAsync } from '../actions/userAction';
import CreateUserComponent from '../components/CreateUserComponent';

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  newUser: state.userReducer.newUser,
  loading: state.userReducer.loading,
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = {
  createUsersAsync: () => createUsersAsync(),
};
// Khác với cách mặc định bên dưới, vì hàm GetUsersAsync đã gồm dispatch rồi
// const mapDispatchToProps = (dispatch) => ({
//   increaseCount: (number) => dispatch(increaseCount(number)),
//   decreaseCount: (number) => dispatch(decreaseCount(number)),
// });

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserComponent);


