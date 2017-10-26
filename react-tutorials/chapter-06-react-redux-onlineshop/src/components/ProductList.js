import React from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ products, onProductClick }) => (
  <div>
    <h2>Manage Products</h2>
    <button>Click me</button>
    <ul>
      {products.map(p => (
        <li
          key={p.id}
          onClick={() => onProductClick(p.id)}>{p.name}</li>
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