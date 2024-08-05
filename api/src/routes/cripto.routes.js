import { Router } from "express";
import { 
    addCripto,
    getCripto,
    getCriptos,
 } from '../controllers/cripto.controllers.js';
import { getActualPriceDB, test, getdifDate } from "../controllers/getActualPrice.controllers.js";
const router = Router();

router.get('/criptos', getCriptos );
router.get('/cripto/:cripto', getCripto);
router.get('/dayprice/:cripto', getActualPriceDB);
router.post('/cripto', addCripto );

// router.get('/test', getdifDate);
// router.put('/cripto/:id' );
// router.delete('/cripto/:id' );

export default router;