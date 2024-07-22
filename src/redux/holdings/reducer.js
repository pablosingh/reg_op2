import { AVERAGE } from './actions';
const initialState = {
    holdings: [],
};


export const holdings = ( state = initialState, action ) => {
    switch( action.type ){
        case AVERAGE:
            const operation = state?.holdings.find( f => f.ticker==action.payload.ticker );
            if ( operation ){
                const toAdd = {
                    ...operation,
                    amount: operation.amount + action.payload.amount,
                    total: operation.total + action.payload.total,
                    price: (operation.total+action.payload.total)/(operation.amount+action.payload.amount),
                };
                return {
                    ...state,
                    holdings: [
                        ...state.holdings.filter(h => h.ticker!=operation.ticker),
                        toAdd,
                    ],
                };
            }else
                return {
                    ...state,
                    holdings: [...state.holdings, action.payload ],
                };
        default: return state;
    };
};

export default holdings;