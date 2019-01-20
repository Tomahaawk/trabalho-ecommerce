import {
    PRODUCTS_FETCH_SUCESS,
    // PRODUCT_ADD_CART,
    // PRODUCT_FETCH_SUCCESS
} from './types';
import { Dispatch } from 'redux';

export const productsFetch = () => {
    return (dispatch: Dispatch) => {
        dispatch({type: PRODUCTS_FETCH_SUCESS, payload: ['aaa']});
    }
}