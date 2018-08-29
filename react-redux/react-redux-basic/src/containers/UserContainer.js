import { connect } from 'react-redux';
import { getUsersAsync } from '../actions/userAction';
import UserComponent from '../components/UserComponent';

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  users: state.userReducer.users,
  loading: state.userReducer.loading,
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = {
  getUsersAsync,
};
// Khác với cách mặc định bên dưới, vì hàm GetUsersAsync đã gồm dispatch rồi
// const mapDispatchToProps = (dispatch) => ({
//   increaseCount: (number) => dispatch(increaseCount(number)),
//   decreaseCount: (number) => dispatch(decreaseCount(number)),
// });


export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);


