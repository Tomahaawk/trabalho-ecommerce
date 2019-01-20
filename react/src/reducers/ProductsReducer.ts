import {
    PRODUCTS_FETCH_SUCESS
} from '../actions/types';

const INITIAL_STATE = {
    products: []
}

export default (state = INITIAL_STATE, action: any) => {
    console.log(action);
    switch (action.type) {
      case PRODUCTS_FETCH_SUCESS:
        return { ...state, productsList: action.payload };

      default:
        return state;
    }
  };