export const AVERAGE = 'AVERAGE';
export const LOAD_HOLD_FROM_DB = 'LOAD_HOLD_FROM_DB';

// export const average = (op) => {
//     return {
//         type: AVERAGE,
//         payload: op,
//     };
// };

// export function actualPrice () {
//     return async function (dispatch) {
//         const apiURL = `https://www.binance.us/api/v3/ticker/price?symbol=btcusdt`;
//         try{
//             await fetch(apiURL, {
//                 method: 'GET',
//                 headers: {
//                   'Content-Type': 'application/json',
//                   // Otros encabezados necesarios según la API (por ejemplo, tokens de autorización)
//                 },
//                 mode: 'cors', // Modo CORS
//               })
//                 .then( js => js.json() )
//                 .then( data => console.log(data) )
//                 .catch( err => console.error(err) )
//         }catch(e){
//             console.error(e);
//         };
//     };  
// };

export function loadHoldingsFromDB () {
    return async function (dispatch) {
        var holdingsToSend = [];
        var promesas = [];
        var subPromesas = [];
        try {
            await fetch(`http://localhost:3001/holdings`)
                .then( js => js.json() )
                .then( holdingsResDB => {
                    holdingsToSend = [...holdingsResDB];
                    holdingsToSend.forEach( hold => {
                        promesas.push(fetch(`http://localhost:3001/dayprice/${hold.ticker}`))
                    })
                })
                .then( () => {
                    Promise.all(promesas)
                        .then( values => values.forEach( v => subPromesas.push( v.json() ) ) )
                        .then( () => {
                            Promise.all(subPromesas)
                                .then( subValues => {
                                    subValues.forEach( (sub, i) => {
                                        if(sub){
                                            holdingsToSend[i].actualPrice = sub.price;
                                            holdingsToSend[i].profits = holdingsToSend[i].actualPrice-holdingsToSend[i].price;
                                        }
                                    });
                                })
                                // .then( () => console.log(holdingsToSend) ) 
                                .then( () => dispatch({ type: LOAD_HOLD_FROM_DB, payload: holdingsToSend }))
                        } )
                })
                .catch( err => console.error(err) );
        } catch (error) {
            console.error(error);
        }
    };
};

