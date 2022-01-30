import {
  FETCH_CRYPTO_REQUEST,
  FETCH_CRYPTO_SUCCESS,
  FETCH_CRYPTO_FAILURE,
} from '../actions/action';

const INITIAL_STATE = {
  crypto: [],
  loading: false,
  error: null
};

const cryptoReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_CRYPTO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CRYPTO_SUCCESS:
      return {
        ...state,
        loading: false,
        crypto: action.payload,
      };
    case FETCH_CRYPTO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cryptoReducer;
