export const LOAD_HOLD_FROM_DB = 'LOAD_HOLD_FROM_DB';
export const LOAD_USER_ID = 'LOAD_USER_ID';

// function actualPrice
// apiURL = `https://www.binance.us/api/v3/ticker/price?symbol=btcusdt`;
// REACT_APP_API_URL=https://reg-op2-api.onrender.com

const apiUrl = process.env.REACT_APP_API_URL;

export function loadHoldingsFromDB (userId) {
    return async function (dispatch) {
        var holdingsToSend = [];
        var promesas = [];
        var subPromesas = [];
        try {
            // await fetch(`${apiUrl}/holdings/${userId}`)
            await fetch(`http://localhost:3001/holdings/${userId}`)
                .then( js => js.json() )
                .then( holdingsResDB => {
                    if(holdingsResDB.length > 0){
                        holdingsToSend = [...holdingsResDB];
                        holdingsToSend.forEach( hold => {
                            promesas.push(fetch(`http://localhost:3001/dayprice/${hold.ticker}`))
                            // promesas.push(fetch(`${apiUrl}/dayprice/${hold.ticker}`))
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
                                            holdingsToSend[i].profits = (holdingsToSend[i].actualPrice*holdingsToSend[i].amount)-(holdingsToSend[i].price*holdingsToSend[i].amount);
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
        console.log(apiUrl);
        console.log(email);
        console.log(name);
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
            // await fetch(`${apiUrl}/userbyemail`, options)
            await fetch(`http://localhost:3001/userbyemail`, options)
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
