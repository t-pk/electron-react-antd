import { combineReducers } from 'redux';
import getTest from './getState';

const rootReducer = combineReducers({ test: getTest });

export default rootReducer;
