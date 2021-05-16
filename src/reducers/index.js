import { combineReducers } from 'redux';
import stockReducer  from './stockReducer';
import companyReducer from './companyReducer'
import forexReducer from './forexReducer';
import filterReducer from './filterReducer';

const allReducers = combineReducers({
  stocks: stockReducer,
  companies: companyReducer,
  forex: forexReducer,
  filter: filterReducer,
});

export default allReducers;