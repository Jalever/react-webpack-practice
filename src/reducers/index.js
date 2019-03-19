import { combineReducers } from 'redux';
import productReducer from './products-reducer';
import cartReducer from './cart-reducer';

const allReducers = {
  products: productReducer,
  shoppingCart: cartReducer,
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
