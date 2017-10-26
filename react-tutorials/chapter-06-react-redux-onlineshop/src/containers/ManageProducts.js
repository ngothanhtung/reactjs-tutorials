import { connect } from 'react-redux';
import { selectProduct } from '../actions';
import ProductList from '../components/ProductList';


const mapStateToProps = (state) => ({
    products: state.products
});

const mapDispatchToProps = {
    onProductClick: selectProduct
};

const ManageProducts = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);

export default ManageProducts;
