import * as types from '../constants/ActionTypes';

export const addProduct = (id, name, price) => ({
  type: types.ADD_PRODUCT,
  id: id,
  name: name,
  price: price
});

export const selectProduct = (id) => ({
  type: types.SELECT_PRODUCT,
  id: id
});