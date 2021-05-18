/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
import { combineReducers } from 'redux';
import stockReducer from './stockReducer';
import companyReducer from './companyReducer';
import forexReducer from './forexReducer';
import filterReducer from './filterReducer';
import stockItemReducer from './stockItemReducer';

const allReducers = combineReducers({
  stocks: stockReducer,
  companies: companyReducer,
  forex: forexReducer,
  filter: filterReducer,
  stockItem: stockItemReducer,
});

export default allReducers;
