import Operation from "../models/Operation.js";

export const createOperation = async (req, res) => {
    console.log(req.body);
    const { date, ticker, amount, price, total, buy, exchange, comment } = req.body;
    
    try {
        const toCreate = { 
            amount: Number.parseFloat(amount),
            buy,
            comment, 
            date: new Date(),
            exchange, 
            price: Number.parseFloat(price), 
            ticker: ticker.toUpperCase(), 
            total: Number.parseFloat(total), 
        };
        const newOperation = await Operation.create(toCreate);
        res.json(newOperation);
    } catch (error) {
        res.json({message: error});
    };
};

export const getOperation = async (req, res) => {
    try {
        const arrayOp = await Operation.findAll();
        res.json(arrayOp);   
    } catch (error) {
        res.json({message: error});
    };
};

export const updateOperation = async (req, res) => {
    try {
        const { id } = req.params;
        const { 
            ticker, price, amount,
            total, buy, comment,
            exchange
         } = req.body;
        //  console.log(req.body);
        //  buy = stringToBoolean(buy);
        const foundOperation = await Operation.findOne({
            where: {
                id: id
            }
        });
        ticker ? foundOperation.ticker = ticker : null;
        price ? foundOperation.price = Number(price) : null;
        amount ? foundOperation.amount = Number(amount) : null;
        total ? foundOperation.total = Number(total) : null;
        buy ? foundOperation.buy = buy : null;
        comment ? foundOperation.comment = comment : null;
        exchange ? foundOperation.exchange = exchange : null;
        await foundOperation.save();
        res.json(foundOperation);
    } catch (error) {
        res.status(500).json({message: error});
    }
};

export const deleteOperation = async (req, res) => {
    try {
        const { id } = req.params;
        await Operation.destroy({
            where: {
                id,
            }
        }); 
        res.json({ message: "Operacion eliminada: "+id });
    } catch (error) {
        res.status(404).json({message: error});
    }
};