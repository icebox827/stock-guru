/* eslint-disable one-var */
/* eslint-disable sort-vars */
/* eslint-disable sort-keys */
/* eslint-disable max-len */
import {
  FETCH_COMPANIES_FAILURE,
  FETCH_COMPANIES_REQUEST,
  FETCH_COMPANIES_SUCCESS,
  FETCH_FOREX_FAILURE,
  FETCH_FOREX_REQUEST,
  FETCH_FOREX_SUCCESS,
  FETCH_STOCK_FAILURE,
  FETCH_STOCK_ITEM_FAILURE,
  FETCH_STOCK_ITEM_REQUEST,
  FETCH_STOCK_ITEM_SUCCESS,
  FETCH_STOCK_REQUEST,
  FETCH_STOCK_SUCCESS,
  FILTER_STOCK_FAILURE,
  FILTER_STOCK_REQUEST,
  FILTER_STOCK_SUCCESS,
} from './action';

const fetchStock = () => async (dispatch) => {
    dispatch({ type: FETCH_STOCK_REQUEST });
    try {
      const response = await fetch('https://financialmodelingprep.com/api/v3/actives?apikey=8363e942a393eaaf6061932fbb0ad836'),
        data = await response.json();
      dispatch({
        type: FETCH_STOCK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_STOCK_FAILURE,
        payload: error,
      });
    }
  },
  fetchCompanies = () => async (dispatch) => {
    dispatch({ type: FETCH_COMPANIES_REQUEST });
    try {
      const response = await fetch('https://financialmodelingprep.com/api/v3/stock-screener?marketCapLowerThan=10000000000000&betaMoreThan=1&volumeMoreThan=100&exchange=NYSE,NASDAQ&apikey=8363e942a393eaaf6061932fbb0ad836'),
        data = await response.json();
      dispatch({
        type: FETCH_COMPANIES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_COMPANIES_FAILURE,
        payload: error,
      });
    }
  },

  fetchForex = () => async (dispatch) => {
    dispatch({ type: FETCH_FOREX_REQUEST });
    try {
      const response = await fetch('https://financialmodelingprep.com/api/v3/fx?apikey=8363e942a393eaaf6061932fbb0ad836'),
        data = await response.json();
      dispatch({
        type: FETCH_FOREX_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_FOREX_FAILURE,
        payload: error,
      });
    }
  },
  filterStock = (stock = 'actives') => async (dispatch) => {
    dispatch({ type: FILTER_STOCK_REQUEST });
    try {
      const response = await fetch(`https://financialmodelingprep.com/api/v3/${stock}?apikey=8363e942a393eaaf6061932fbb0ad836`),
        data = await response.json();
      dispatch({
        type: FILTER_STOCK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FILTER_STOCK_FAILURE,
        payload: error,
      });
    }
  },

  fetchStockItem = (ticker) => async (dispatch) => {
    dispatch({ type: FETCH_STOCK_ITEM_REQUEST });
    try {
      const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=71692019ce2067a12139d5ef9415ecdb`);
      const data = await response.json();
      dispatch({
        type: FETCH_STOCK_ITEM_SUCCESS,
        // eslint-disable-next-line no-magic-numbers
        payload: data[0],
      });
    } catch (error) {
      dispatch({
        type: FETCH_STOCK_ITEM_FAILURE,
        payload: error,
      });
    }
  };

export {
  fetchStock, fetchCompanies, fetchForex, filterStock, fetchStockItem,
};
