
export const holdings = ( state = initialState, action ) => {
    switch( action.type ){
        case AVERAGE: 
            return {
                ...state,
            }
        default: return state;
    };
};

export default holdings;