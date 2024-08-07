import { Router } from "express";
import { 
    addCripto,
    getCriptos,
 } from '../controllers/criptos/cripto.controllers.js';
import { getActualPriceDB, test, getdifDate } from "../controllers/getActualPrice.controllers.js";
const router = Router();

// router.get('/cripto/:cripto', getCripto); // Por cripto sin ordenar
router.get('/criptos', getCriptos ); // Trae todas las criptos de la DB
router.get('/dayprice/:cripto', getActualPriceDB); // cripto mas actual
router.post('/cripto', addCripto );

// router.get('/test', getdifDate);
// router.put('/cripto/:id' );
// router.delete('/cripto/:id' );

export default router;