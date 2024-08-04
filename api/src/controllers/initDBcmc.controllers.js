import Cripto from "../models/Cripto.js";

export const initialCriptoLoadingCMC = async () => {
    console.log("Carga inicial de DB desde API CoinMarketCap");
    const arrayCripto = [];
    const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`;
    const headers = {
        'Content-Type': 'application/json',
        'X-CMC_PRO_API_KEY': '6b555911-d0f2-417f-9bd1-95cf5ea375aa'
    };
    try {
        // const nDate = await difDate();
        // if( nDate >= 1 ){
            await fetch(url, {
                method: 'GET', 
                headers: headers,
            })
                .then( js => js.json() )
                .then( arrayRes => {
                    arrayRes.data.map( element => {
                        arrayCripto.push({
                            cripto: element.symbol,
                            price: element.quote.USD.price
                        });
                    })
                    return arrayCripto;
                })
                .then( arrayToCreate => {
                    arrayToCreate.map( async toCreate => {
                        await Cripto.create({
                            cripto: toCreate.cripto.toUpperCase(),
                            price: toCreate.price,
                            update: new Date(),
                        });
                    });
                })
                // .then( rr => console.log(arrayCripto))
                .catch(e => console.error(e) );
        // }else res.json({responseElse: "else"});
    } catch (error) {
        console.error(error);
    }
    // console.log(arrayCripto);
    return arrayCripto;
};