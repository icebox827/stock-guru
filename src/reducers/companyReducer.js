import {
  FETCH_COMPANIES_FAILURE,
  FETCH_COMPANIES_REQUEST,
  FETCH_COMPANIES_SUCCESS,
} from '../actions/action';

const INITIAL_STATE = {
  companies: [],
  loading: false,
  error: null,
};

const companyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COMPANIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_COMPANIES_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: action.payload,
      };
    case FETCH_COMPANIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default companyReducer;
