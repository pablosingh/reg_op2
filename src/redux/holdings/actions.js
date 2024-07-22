export const AVERAGE = 'AVERAGE';

export const average = (op) => {
    return {
        type: AVERAGE,
        payload: op,
    };
};

export function actualPrice () {
    return async function (dispatch) {
        const apiURL = `https://www.binance.us/api/v3/ticker/price?symbol=btcusdt`;
        try{
            await fetch(apiURL, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  // Otros encabezados necesarios según la API (por ejemplo, tokens de autorización)
                },
                mode: 'cors', // Modo CORS
              })
                .then( js => js.json() )
                .then( data => console.log(data) )
                .catch( err => console.error(err) )
        }catch(e){
            console.error(e);
        };
    };  
};

