export const AVERAGE = 'AVERAGE';

export const average = (op) => {
    return {
        type: AVERAGE,
        payload: op,
    };
};

