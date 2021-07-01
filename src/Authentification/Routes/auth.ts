import { Router } from "express";
import AuthController from "../controllers/AuthController";
import { checkJwt } from "../middlewares/checkJwt";
import UserController from "../controllers/UserController";


const router = Router();
//Login route
router.post("/login", AuthController.login);
router.post("/addUser", UserController.newUser);

//Change my password

export default router;