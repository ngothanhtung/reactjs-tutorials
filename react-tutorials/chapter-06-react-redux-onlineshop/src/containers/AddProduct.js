import React from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions';

let AddProduct = ({ dispatch }) => {
  let inputName;
  let inputPrice;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!inputName.value.trim()) {
          return;
        }
        var result = dispatch(addProduct(0, inputName.value, inputPrice.value))
        console.log(result);

        inputName.value = '';
        inputPrice.value = '';

        
      }}>
        <input className='form-control' ref={node => {
          inputName = node
        }} />
        <input className='form-control' ref={node => {
          inputPrice = node
        }} />
        <button type="submit">
          Add product
        </button>
      </form>
    </div>
  )
}

AddProduct = connect()(AddProduct);

export default AddProduct;
