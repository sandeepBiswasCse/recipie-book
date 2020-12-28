import _ from 'lodash';
import {
    CREATE_CART,
    FETCH_CART,
    DELETE_CART,
    EDIT_CART
} from '../actions/types';

export default (state={}, action) => {
    switch(action.type) {
        case CREATE_CART:
            return {...state, [action.payload.id]: action.payload};
        case FETCH_CART:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case DELETE_CART:
            return _.omit(state, action.payload);
        case EDIT_CART:
            return {...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
};