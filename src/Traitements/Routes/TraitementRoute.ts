import { Router } from "express";
import TraitementController from "../Controllers/TraitementController";
import { checkJwt } from "../../Authentification/Middlewares/checkJwt";


const router = Router();
//Login route
router.post("/login", TraitementController);
// VERIFY JWT
//router.post("/addUser",[checkJwt], UserController.newUser);

export default router;