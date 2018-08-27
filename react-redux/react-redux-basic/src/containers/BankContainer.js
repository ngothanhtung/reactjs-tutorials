import { connect } from 'react-redux';

import { deposite, withdraw } from '../actions/bankAction';
import BankComponent from '../components/BankComponent';

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  balance: state.bankReducer.balance,
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  deposite: (money) => dispatch(deposite(money)),
  withdraw: (money) => dispatch(withdraw(money)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BankComponent);


