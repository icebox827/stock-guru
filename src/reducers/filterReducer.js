import {
  FILTER_STOCK_REQUEST,
  FILTER_STOCK_SUCCESS,
  FILTER_STOCK_FAILURE
} from '../actions/action'

const INITIAL_STATE = {
  filter: [],
  loading: false,
  errur: null
}

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_STOCK_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FILTER_STOCK_SUCCESS:
      return {
        ...state,
        loading: false,
        filter: action.payload
      }
    case FILTER_STOCK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default filterReducer
