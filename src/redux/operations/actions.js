export const ADD_OP = 'ADD_OP';
export const DELETE_OP = 'DELETE_OP';

export const addOperation = (op) => {
    return {
        type: ADD_OP,
        payload: op,
    };
};

export const deleteOperation = (op) => {
    return {
        type: DELETE_OP,
        payload: op,
    };
};