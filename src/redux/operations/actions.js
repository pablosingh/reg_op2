export const ADD_OP = 'ADD_OP';
export const DELETE_OP = 'DELETE_OP';
export const TEST = 'TEST';

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

export const test = (op) => {
    return async function(dispatch) {
        try {
            await fetch(`http://localhost:3001/cripto/btc`)
                .then(js => js.json())
                .then(res => {
                    console.log(res);
                    dispatch(addOperation(op));
                })
                .catch(e => console.error(e));
        } catch (err) {
            console.error(err);
        }
    };
};

export const addOperationToDB = (op) => {
    return async function (dispatch) {
        console.log(op);
        console.log(JSON.stringify(op));
        try {
            await fetch(`http://localhost:3001/operations`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  // Puedes añadir más encabezados si es necesario
                },
                body: JSON.stringify(op),
              })
                .then(js => js.json())
                .then(res => {
                    console.log(res);
                    dispatch(addOperation(op));
                })
                .catch(e => console.error(e));
        } catch (err) {
            console.error(err);
        }
    }; 
};