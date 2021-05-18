import {
    FETCH_STOCK_FAILURE,
    FETCH_STOCK_REQUEST,
    FETCH_STOCK_SUCCESS
} from "../actions/action";

const INITIAL_STATE = {
        "stocks": [],
        "loading": false,
        "error": null
    },

    stockReducer = (state = INITIAL_STATE, action) => {

        switch (action.type) {

        case FETCH_STOCK_REQUEST:
            return {
                ...state,
                "loading": true,
                "error": null
            };
        case FETCH_STOCK_SUCCESS:
            return {
                ...state,
                "loading": false,
                "stocks": action.payload
            };
        case FETCH_STOCK_FAILURE:
            return {
                ...state,
                "loading": false,
                "error": action.payload
            };
        default:
            return state;

        }

    };

export default stockReducer;
