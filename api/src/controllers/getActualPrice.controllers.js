import Cripto from "../models/Cripto.js";
const apiKeyCoinM = '6b555911-d0f2-417f-9bd1-95cf5ea375aa';
import fetch from 'node-fetch';

export const getActualPrice = async (req, res) => {
    const { ticker } = req.params;
    try {
        await fetch(`https://www.binance.us/api/v3/ticker/price?symbol=${ticker.toUpperCase()}`)
            .then(responseApi => responseApi.json())
            .then(responseApi => res.json(responseApi))
            .catch(err => res.json({message: err}) );
    } catch (error) {
        res.json({message: error});
    }
};

export const getActualPriceFunc = async (ticker) => {
    try {
        let price = 0;
        await fetch(`https://www.binance.us/api/v3/ticker/price?symbol=${ticker.toUpperCase()}`)
            .then(responseApi => responseApi.json())
            .then(responseApi => price=responseApi.price)
            .catch(err => price=err );
        return price;
    } catch (error) {
        return {message: error};
    }
};

export const getdifDate = async () => {
    try {
        const btcDB = await Cripto.findOne({
            where: {
                cripto: "BTC"
            },
            order: [['update', 'DESC']]
        });
        const dateDB = new Date(btcDB.dataValues.update);
        const today = new Date();
        const dif = Math.round((today-dateDB)/86400000);
        console.log(dif);
        return dif;
    } catch (error) {
        console.error(error);
    }
};

export const updateDB = async (req, res) => {
    try {
        const arrayCripto = [];
        const nDate = await difDate();
        const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`;
        const headers = {
            'Content-Type': 'application/json',
            'X-CMC_PRO_API_KEY': '6b555911-d0f2-417f-9bd1-95cf5ea375aa'
        };
        if( nDate >= 1 ){
            await fetch(url, {
                method: 'GET', 
                headers: headers,
            })
                .then( js => js.json() )
                .then( arrayRes => {
                    arrayRes.data.map( arr => {
                        arrayCripto.push({
                            cripto: arr.symbol,
                            price: arr.quote.USD.price
                        });
                    })
                })
                // .then( rr => console.log(arrayCripto))
                .then( toSend => res.json(arrayCripto))
                .catch(e => res.json({MsgError: e}))
        }else res.json({responseElse: "else"});
    } catch (error) {
        console.log(error);
        res.json({responseCatch: "error"});
    }
};

export const test = async (req, res) => {
    const nDate = await difDate();
    res.json({differece: nDate});
};