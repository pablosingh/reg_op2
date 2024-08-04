import { Router } from "express";
import { 
    getOperation, 
    createOperation, 
    updateOperation, 
    deleteOperation 
} from "../controllers/operations.controllers.js";
import { getActualPrice } from "../controllers/getActualPrice.controllers.js";
const router = Router();

router.get('/operations', getOperation);
router.post('/operations', createOperation);
router.put('/operations/:id', updateOperation);
router.delete('/operations/:id', deleteOperation);
router.get('/operations/:id');
router.get('/actualp/:ticker', getActualPrice );

export default router;