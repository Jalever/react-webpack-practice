import { ADD_TO_CART, UPDATE_TO_CART, DELETE_TO_CART } from '../actions/cart-actions';

const initialState = {
  cart: [
    {
      product: 'Bread 700g',
      quantity: 3,
      unitCost: 230,
    },
    {
      product: 'Milk 200ml',
      quantity: 4,
      unitCost: 210,
    },
  ],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }

    case UPDATE_TO_CART: {
      return {
        ...state,
        cart: state.cart.map(oldStateCart => {
          return oldStateCart.product === action.payload.product ? action.payload : oldStateCart;
        }),
      };
    }

    case DELETE_TO_CART: {
      return {
        ...state,
        cart: state.cart.filter(item => item.product !== action.payload.product),
      };
    }

    default:
      return state;
  }
}
