import { combineReducers } from 'redux';
import stockReducer from './stockReducer';
import companyReducer from './companyReducer';
import forexReducer from './forexReducer';
import filterReducer from './filterReducer';
import stockItemReducer from './stockItemReducer';
import newsReducer from './newsReducers';

const allReducers = combineReducers({
  stocks: stockReducer,
  companies: companyReducer,
  forex: forexReducer,
  filter: filterReducer,
  stockItem: stockItemReducer,
  news: newsReducer,
});

export default allReducers;
