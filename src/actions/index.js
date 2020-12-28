import history from '../history';
import  recipies from '../apis/recipies';
import {
    CREATE_RECIPIE,
    DELETE_RECIPIE,
    EDIT_RECIPIE,
    FETCH_RECIPIE,
    FETCH_RECIPIES,
    CREATE_CART,
    FETCH_CART,
    DELETE_CART
} from './types';

export const createRecipie = (formValues) => {
    return async (dispatch) => {
        const response = await recipies.post('/recipies', formValues);
        dispatch({
            type: CREATE_RECIPIE,
            payload: response.data
        });
        history.push('/');
    };
};

export const fetchRecipies = () => {
    return async (dispatch) => {
        const response = await recipies.get('/recipies');
        dispatch({
            type: FETCH_RECIPIES,
            payload: response.data
        });
    };
};

export const fetchRecipie = (id) => async dispatch => {
    const response = await recipies.get(`/recipies/${id}`);
    dispatch({type: FETCH_RECIPIE, payload: response.data});
};

export const editRecipie = (id, formValues) => async dispatch => {
    const response = await recipies.patch(`/recipies/${id}`, formValues);
    dispatch({type: EDIT_RECIPIE, payload: response.data});
    history.push('/');
};

export const deleteRecipie = (id) => async dispatch => {
    await recipies.delete(`/recipies/${id}`);
    dispatch({type: DELETE_RECIPIE, payload: id});
    history.push('/');
};

// -----------------------cart-----------------

export const createCart = (formValues) => {
    return async (dispatch) => {
        const response = await recipies.post('/cart', formValues);
        dispatch({
            type: CREATE_CART,
            payload: response.data
        });
    };
};

export const fetchCart = () => {
    return async (dispatch) => {
        const response = await recipies.get('/cart');
        dispatch({
            type: FETCH_CART,
            payload: response.data
        });
    };
};

export const deleteCart = (id) => async dispatch => {
    await recipies.delete(`/cart/${id}`);
    dispatch({type: DELETE_CART, payload: id});
};

export const editCart = (id, formValues) => async dispatch => {
    const response = await recipies.patch(`/cart/${id}`, formValues);
    dispatch({type: EDIT_RECIPIE, payload: response.data});
    history.push('/cart');
};