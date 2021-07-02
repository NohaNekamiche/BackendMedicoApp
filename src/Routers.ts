import { Router, Request, Response } from "express";
import auth from "../src/Authentification/Routes/auth";
import traitement from "../src/Traitements/Routes/TraitementRoute";


const routes = Router();

routes.use("/auth", auth);
routes.use("/traitement",traitement);


export default routes;