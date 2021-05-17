import {
  FETCH_STOCK_REQUEST,
  FETCH_STOCK_SUCCESS,
  FETCH_STOCK_FAILURE,
  FETCH_COMPANIES_REQUEST,
  FETCH_COMPANIES_SUCCESS,
  FETCH_COMPANIES_FAILURE,
  FETCH_FOREX_REQUEST,
  FETCH_FOREX_SUCCESS,
  FETCH_FOREX_FAILURE,
  FILTER_STOCK_REQUEST,
  FILTER_STOCK_SUCCESS,
  FILTER_STOCK_FAILURE,
} from './action';

const fetchStock = () => async(dispatch) => {
  dispatch({ type: FETCH_STOCK_REQUEST });

  try {
    const response = await fetch('https://financialmodelingprep.com/api/v3/actives?apikey=71692019ce2067a12139d5ef9415ecdb');
    const data = await response.json();

    dispatch({ type: FETCH_STOCK_SUCCESS, payload: data })
  }catch (error) {
    dispatch({ type: FETCH_STOCK_FAILURE, payload: error });
  }
};

const fetchCompanies = () => async(dispatch) => {
  dispatch({ type: FETCH_COMPANIES_REQUEST });

  try {
    const response = await fetch('https://financialmodelingprep.com/api/v3/stock-screener?marketCapLowerThan=10000000000000&betaMoreThan=1&volumeMoreThan=100&exchange=NYSE,NASDAQ&apikey=71692019ce2067a12139d5ef9415ecdb');
    const data = await response.json();

    dispatch({ type: FETCH_COMPANIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_COMPANIES_FAILURE, payload: error});
  }
};

console.log(fetchCompanies());

const fetchForex = () => async(dispatch) => {
  dispatch({ type: FETCH_FOREX_REQUEST });

  try {
    const response = await fetch('https://financialmodelingprep.com/api/v3/fx?apikey=71692019ce2067a12139d5ef9415ecdb');
    const data = await response.json();

    dispatch({ type: FETCH_FOREX_SUCCESS, payload: data });
  }catch (error) {
    dispatch({ type: FETCH_FOREX_FAILURE, payload: error });
  }
};

const filterStock = (stock) => async(dispatch) => {
  dispatch({ type: FILTER_STOCK_REQUEST });

  try {
    const response = await fetch(`https://financialmodelingprep.com/api/v3/${stock}?apikey=71692019ce2067a12139d5ef9415ecdb`);
    const data = await response.json();
    dispatch({ type: FILTER_STOCK_SUCCESS, payload: data });
  }catch (error) {
    dispatch({ type: FILTER_STOCK_FAILURE, payload: error });
  }
};

export { fetchStock, fetchCompanies, fetchForex, filterStock };