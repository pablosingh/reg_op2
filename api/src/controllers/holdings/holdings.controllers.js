import Holding from "../../models/Holding.js";
import User from "../../models/User.js";
import Operation from '../../models/Operation.js';

export const getHoldingsByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const foundHoldings = await Holding.findAll({
            where: {
                UserId: userId
            },
            include: [ Operation, User ]
        });
        res.json(foundHoldings);
    } catch (error) {
        res.json({msg: error});
    }
};


export const getHoldings = async (req, res) => {
    try {
        const foundHoldings = await Holding.findAll({
            include: [ Operation, User ]
        });
        res.json(foundHoldings);
    } catch (error) {
        res.json({msg: error});
    }
};

export const createHolding = async (req, res) => {
    const { date, ticker, amount, price, total, comment, UserId } = req.body;
    // const dateTicker = new Date();
    // const formattedDate = dateTicker.toLocaleDateString('es-ES', {
    //     day: '2-digit',
    //     month: '2-digit',
    //     year: 'numeric',
    // });
    const toCreate = { 
        date: date,
        ticker: ticker?.toUpperCase(), 
        amount: Number.parseFloat(amount),
        price: Number.parseFloat(price), 
        total: Number.parseFloat(total), 
        comment,
        UserId,
    };
    try {
        const newHolding = await Holding.create(toCreate);
        res.json(newHolding);
    } catch (error) {
        res.json({msg: error});
    };
};