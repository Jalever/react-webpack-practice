export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_TO_CART = 'UPDATE_TO_CART';
export const DELETE_TO_CART = 'DELETE_TO_CART';

export function addToCart(product, quantity, unitCost) {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
      quantity,
      unitCost,
    },
  };
}

export function updateCart(product, quantity, unitCost) {
  return {
    type: UPDATE_TO_CART,
    payload: {
      product,
      quantity,
      unitCost,
    },
  };
}

export function deleteCart(product) {
  return {
    type: DELETE_TO_CART,
    payload: {
      product,
    },
  };
}
