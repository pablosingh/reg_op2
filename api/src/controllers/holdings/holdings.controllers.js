import Holding from "../../models/Holding.js";

export const getHoldings = async (req, res) => {
    try {
        const foundHoldings = await Holding.findAll({});
        res.json(foundHoldings);
    } catch (error) {
        res.json({msg: error});
    }
};

export const createHolding = async (req, res) => {
    let created = {};
    const { date, ticker, amount, price, total, buy, exchange, comment } = req.body;
    const toCreate = { 
        amount: Number.parseFloat(amount),
        // buy,
        comment, 
        date: new Date(),
        // exchange,
        price: Number.parseFloat(price), 
        ticker: ticker.toUpperCase(), 
        total: Number.parseFloat(total), 
    };
    try {
        const foundHolding = await Holding.findOne({
            where: {
                ticker
            }
        });
        if (!foundHolding){
            created = await Holding.create(toCreate);
            // console.log(created);
            res.json(created);
        }else{
            if(buy){
                foundHolding.amount += toCreate.amount;
                foundHolding.total += toCreate.total;
                foundHolding.price = foundHolding.total/foundHolding.amount;
                await foundHolding.save();
            }else{
                foundHolding.amount -= toCreate.amount;
                foundHolding.total = toCreate.amount*toCreate.price;
                await foundHolding.save();
            };
            // console.log(foundHolding);
            res.json(foundHolding);
        };
    } catch (error) {
        // console.error(error);
        res.json({msg: error});
    };
};