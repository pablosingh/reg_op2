import { Router } from "express";
import { getHoldings, createHolding } from '../controllers/holdings/holdings.controllers.js';
const router = Router();

router.get('/holdings', getHoldings);
router.post('/holdings', createHolding);
router.put('/holdings/:id');
router.delete('/holdings/:id');

export default router;