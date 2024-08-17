export const LOAD_HOLD_FROM_DB = 'LOAD_HOLD_FROM_DB';
export const LOAD_USER_ID = 'LOAD_USER_ID';

// function actualPrice
// apiURL = `https://www.binance.us/api/v3/ticker/price?symbol=btcusdt`;

const apiUrl = process.env.REACT_APP_API_URL;
// const apiUrl = process.env.REACT_APP_API_URL_DEV;
// const apiUrlDev = 'http://localhost:3001'

export function loadHoldingsFromDB (userId) {
    return async function (dispatch) {
        var holdingsToSend = [];
        var promesas = [];
        var subPromesas = [];
        try {
            await fetch(`${apiUrl}/holdings/${userId}`)
                .then( js => js.json() )
                .then( holdingsResDB => {
                    if(holdingsResDB.length > 0){
                        holdingsToSend = [...holdingsResDB];
                        holdingsToSend.forEach( hold => {
                            promesas.push(fetch(`${apiUrl}/dayprice/${hold.ticker}`))
                        })
                    }
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

export function loadUserId ({email, name}) {
    return async function (dispatch) {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                email,
                name
            }),
            mode: 'cors', // Modo CORS
            headers: {
                'Content-Type': 'application/json',
            }
        };
        try {
            await fetch(`${apiUrl}/userbyemail`, options)
                .then( js => js.json() )
                .then( usr => {
                    dispatch({ type: LOAD_USER_ID, payload: usr.id}) 
                    return usr.id;
                })
                .then( id => dispatch(loadHoldingsFromDB(id)) )
                .catch( e => console.error(e) )
        } catch (error) {
            console.error(error)
        }
    };
};