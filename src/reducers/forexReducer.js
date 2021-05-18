import {
  FETCH_FOREX_REQUEST,
  FETCH_FOREX_SUCCESS,
  FETCH_FOREX_FAILURE
} from '../actions/action'

const INITIAL_STATE = {
  forex: [],
  loading: false,
  error: null
}

const forexReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_FOREX_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_FOREX_SUCCESS:
      return {
        ...state,
        loading: false,
        forex: action.payload
      }
    case FETCH_FOREX_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default forexReducer
