import Operation from "../../models/Operation.js";
// import User from "../../models/User.js";
import Holding from "../../models/Holding.js";

export const createOperation = async (req, res) => {
    const { date, ticker, amount, price, total, buy, exchange, comment, UserId } = req.body;
    const dateTicker = new Date();
    const formattedDate = dateTicker.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    const toCreate = { 
        date: formattedDate,
        amount: Number.parseFloat(amount),
        price: Number.parseFloat(price), 
        total: Number.parseFloat(total),
        comment, 
    };
    try {
        const foundHolding = await Holding.findOne({
            where: {
                ticker: ticker.toUpperCase()
            }
        })
        if(foundHolding){
            const newOperation = await Operation.create({
                ...toCreate,
                buy,
                exchange,
                HoldingId: foundHolding.id
            });
            foundHolding.amount += toCreate.amount;
            foundHolding.total += toCreate.total;
            foundHolding.price = foundHolding.total / foundHolding.amount;
            await foundHolding.save();
            res.json(newOperation);
        }else{
            const newHolding = await Holding.create({
                ...toCreate,
                ticker: ticker.toUpperCase(),
                UserId
            });
            const newOperation = await Operation.create({
                ...toCreate,
                buy,
                exchange,
                HoldingId: newHolding.id
            });
            res.json(newOperation);
        };        
    } catch (error) {
        res.json({message: error});
    };
};

export const getOperations = async (req, res) => {
    try {
        const arrayOp = await Operation.findAll({
            include: Holding
        });
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