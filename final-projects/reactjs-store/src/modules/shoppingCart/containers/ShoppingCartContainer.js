import { connect } from 'react-redux';
import { addToCart } from '../actions';
import ShoppingCartComponent from '../components/ShoppingCartComponent';

const mapStateToProps = (state) => ({
  addedProducts: state.shoppingCartReducer.addedProducts,
  total: state.shoppingCartReducer.total,
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  addToCart: (product, quantity) => dispatch(addToCart(product, quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartComponent);

