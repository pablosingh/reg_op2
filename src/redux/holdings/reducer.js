import { LOAD_HOLD_FROM_DB } from './actions';
const initialState = {
    holdings: [],
};


export const holdings = ( state = initialState, action ) => {
    switch( action.type ){
        case LOAD_HOLD_FROM_DB: 
            return {
                ...state,
                holdings: [...action.payload]
            };
        default: return state;
    };
};

export default holdings;