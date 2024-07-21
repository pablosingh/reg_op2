import { AVERAGE } from './actions';
const initialState = {
    holdings: [],
};


export const holdings = ( state = initialState, action ) => {
    switch( action.type ){
        case AVERAGE:
            // const operation = state.holdings.find( f => f.ticker==op.ticker );
            // operation.amount += op.amount;
            // operation.total += op.total;
            // operation.price = operation.total/operation.amount;
            return {
                ...state,
            }
        default: return state;
    };
};

export default holdings;