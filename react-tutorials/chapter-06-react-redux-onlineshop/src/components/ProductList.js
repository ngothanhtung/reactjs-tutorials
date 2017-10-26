import React from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ products, onProductClick }) => (
  <div>
    <h2>Manage Products</h2>
    <ul>
      {products.map(p => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  </div>
)

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired).isRequired,
  onProductClick: PropTypes.func.isRequired
}

export default ProductList