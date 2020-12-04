// importing REDUX dependencies
import {combineReducers} from 'redux';

// importing reducer slices
import CartReducer from './Cart/CartReducer';


export default combineReducers ({
    cart:CartReducer
});