import Cripto from "../models/Cripto.js";
import { getActualPriceFunc } from './getActualPrice.controllers.js';

export const addCripto = async (req, res) => {
    // console.log(req.body);
    const { cripto } = req.body;
    try {
        const newCripto =  await Cripto.create({
            cripto: cripto.toUpperCase(),
            price: await getActualPriceFunc(cripto),
            update: new Date(),
        });
        res.json(newCripto);
    } catch (error) {
        res.json({message: error});
    }
};

export const getCripto = async (req, res) => {
    // console.log("await");
    // console.log(await getActualPriceFunc("btcusdt"));
    const { cripto } = req.params;
    // console.log(cripto);
    try {
        const foundCripto = await Cripto.findOne({
            where: {
                cripto: cripto.toUpperCase()
            }
        });
        res.json(foundCripto);
    } catch (error) {
        res.json({message: error});
    }
};

export const getCriptos = async (req, res) => {
    try {
        const foundCriptos = await Cripto.findAll({});
        res.json(foundCriptos);
    } catch (error) {
        res.json({message: error});
    }
};
