import {createStore, applyMiddleware} from 'redux';
import combineReducers from './rootReducer';

const middleware = [];
const store = createStore(combineReducers, applyMiddleware(...middleware));

export default store