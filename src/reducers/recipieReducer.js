import _ from 'lodash';
import {
    CREATE_RECIPIE,
    DELETE_RECIPIE,
    EDIT_RECIPIE,
    FETCH_RECIPIE,
    FETCH_RECIPIES
} from '../actions/types';

export default (state={}, action) => {
    switch(action.type) {
        case CREATE_RECIPIE:
            return {...state, [action.payload.id]: action.payload};
        case FETCH_RECIPIE:
            return {...state, [action.payload.id]: action.payload};
        case EDIT_RECIPIE:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_RECIPIE:
            return _.omit(state, action.payload);
        case FETCH_RECIPIES:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        default:
            return state;
    }
};