import * as types from '../constants/ActionTypes';

export const addProduct = (name, price) => ({
	type: types.ADD_PRODUCT,	
  name: name,
  price: price
});