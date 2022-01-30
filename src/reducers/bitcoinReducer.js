import {
  FETCH_BITCOIN_REQUEST,
  FETCH_BITCOIN_SUCCESS,
  FETCH_BITCOIN_FAILURE,
} from '../actions/action';

const INITIAL_STATE = {
  bitcoin: [],
  loading: false,
  error: null,
};

const bitcoinReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_BITCOIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_BITCOIN_SUCCESS:
      return {
        ...state,
        loading: false,
        bitcoin: action.payload,
      };
    case FETCH_BITCOIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bitcoinReducer;