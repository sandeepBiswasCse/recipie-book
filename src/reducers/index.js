import {combineReducers} from 'redux';
import recipieReducer from './recipieReducer';
import {reducer as formReducer} from 'redux-form';
import cartReducer from './cartReducer';

export default combineReducers({
    form: formReducer,
    recipies: recipieReducer,
    cart: cartReducer
});