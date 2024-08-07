import { Router } from "express";
import { createUser, getUserById, getUsers } from "../controllers/users/users.controllers.js";
const router = Router();

router.get('/users', getUsers );
router.get('/user/:id', getUserById);
router.post('/user', createUser );

export default router;