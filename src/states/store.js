import { combineReducers, createStore } from 'redux';
import productReducer from './product/product.reducer';
import counterReducer from './product/counter.reducer';

const rootReducers = combineReducers({productReducer, counterReducer});

const store = createStore(rootReducers);

export default store;