import { ADD_OP, LOAD_OP_FROM_DB } from './actions';

const initialState = {
    operations: [],
};

const operations = ( state = initialState, action ) => {
    switch(action.type){
        case ADD_OP:
            return {
                ...state,
                operations: [...state.operations, action.payload],
            };
        case LOAD_OP_FROM_DB:
            return {
                ...state,
                operations: [...action.payload]
            };
        default: return state;
    };
};

export default operations;