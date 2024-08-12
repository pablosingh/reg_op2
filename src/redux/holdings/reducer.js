import { LOAD_HOLD_FROM_DB, LOAD_USER_ID } from './actions';
const initialState = {
    userId: 0,
    holdings: [],
};


export const holdings = ( state = initialState, action ) => {
    switch( action.type ){
        case LOAD_HOLD_FROM_DB: 
            return {
                ...state,
                holdings: [...action.payload]
            };
        case LOAD_USER_ID:
            return {
                ...state,
                userId: action.payload,
            };
        default: return state;
    };
};

export default holdings;