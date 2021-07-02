import { Router } from "express";
import TraitementController from "../Controllers/TraitementController";
import { checkJwt } from "../../Authentification/Middlewares/checkJwt";


const router = Router();

//router.post("/addTraitement",[checkJwt], TraitementController.addTraitement);
//router.get("/getAllTraitement",[checkJwt], TraitementController.getAllTraitement);
router.get("/getAllTraitement",TraitementController.getAllTraitement);
router.post("/addTraitement", TraitementController.addTraitement);
// VERIFY JWT
//router.post("/addUser",[checkJwt], UserController.newUser);

export default router;