/* eslint-disable default-param-last */
/* eslint-disable sort-keys */
import {
  FETCH_STOCK_ITEM_FAILURE,
  FETCH_STOCK_ITEM_REQUEST,
  FETCH_STOCK_ITEM_SUCCESS,
} from '../actions/action';

const INITIAL_STATE = {
  stockItem: [],
  loading: false,
  error: null,
};

const stockItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_STOCK_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_STOCK_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        stockItem: action.payload,
      };
    case FETCH_STOCK_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default stockItemReducer;
