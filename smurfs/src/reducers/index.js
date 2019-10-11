import { FETCH_SMURFS } from "../actions/index";

const initialState = {
    smurfs: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS:
            return {
                ...state,
                smurfs: action.payload
            }
        default:
            return state;
    }
}