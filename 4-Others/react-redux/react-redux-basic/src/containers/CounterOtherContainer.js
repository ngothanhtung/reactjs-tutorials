import { connect } from 'react-redux';
import CounterOtherComponent from '../components/CounterOtherComponent';

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  doubleCount: state.counterReducer.count * 2
});

export default connect(mapStateToProps, null)(CounterOtherComponent);


