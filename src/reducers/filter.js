import { FILTER_COMPANY } from '../actions/action'

const filterCo = (state = 'All', action) => {
  switch(action.type) {
    case FILTER_COMPANY:
      return action.payload;
    default:
      return state;
  }
}

export default filterCo;