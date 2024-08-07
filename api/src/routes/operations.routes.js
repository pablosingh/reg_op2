import { Router } from "express";
import { 
    getOperations, 
    createOperation, 
    updateOperation, 
    deleteOperation 
} from "../controllers/operations/operations.controllers.js";
// import { getActualPrice } from "../controllers/getActualPrice.controllers.js";
const router = Router();

router.get('/operations', getOperations);
router.post('/operations', createOperation);

// router.get('/actualp/:ticker', getActualPrice );

router.put('/operations/:id', updateOperation);
router.delete('/operations/:id', deleteOperation);

// router.get('/operations/:id');

export default router;