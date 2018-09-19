import * as ActionTypes from '../constants/actionTypes';

const defaultState = {
  addedProducts: [],
  total: 0,
};

var updateTotal = (items) => {
  return items.reduce((total, item) => (total + ((item.product.price * item.quantity) * (100 - item.product.discount) / 100)), 0);
}

const shoppingCartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_TO_CART:
      // FIND ITEM BEFORE ADD TO CART, IF EXISTS THEN UPDATE QUANTITY, ELSE ADD NEW ITEM WITH QUANTITY = 1	
      var found = [...state.addedProducts].find(item => item.product._id === action.product._id);
      if (found) {
        found.quantity++;
        var total = updateTotal([...state.addedProducts]);
        return {
          ...state,
          addedProducts: [...state.addedProducts],
          total: total
        }
      }

      // ELSE ADD NEW ITEM WITH QUANTITY = 1	
      var addedProducts = [...state.addedProducts, { product: action.product, quantity: action.quantity }];
      var total = updateTotal(addedProducts);
      return {
        ...state,
        addedProducts: addedProducts,
        total: total
      };

    default:
      return state;
  }
};

export default shoppingCartReducer;