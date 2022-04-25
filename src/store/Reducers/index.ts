import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import { vendorsReducer } from './vendorsReducer';

export default combineReducers({
    vendors: vendorsReducer,
    filter: filterReducer
});