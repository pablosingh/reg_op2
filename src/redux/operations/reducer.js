import { ADD_OP } from './actions';

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
        default: return state;
    };
};

export default operations;