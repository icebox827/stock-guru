import { combineReducers } from 'redux';
import stockReducer from './stockReducer';
import companyReducer from './companyReducer';
import forexReducer from './forexReducer';
import filterReducer from './filterReducer';
import stockItemReducer from './stockItemReducer';
import bitcoinReducer from './bitcoinReducer';
import cryptoReducer from './cryptoReducer';

const allReducers = combineReducers({
  stocks: stockReducer,
  companies: companyReducer,
  forex: forexReducer,
  filter: filterReducer,
  stockItem: stockItemReducer,
  bitcoin: bitcoinReducer,
  crypto: cryptoReducer,
});

export default allReducers;
