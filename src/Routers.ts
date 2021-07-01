import { Router, Request, Response } from "express";
import auth from "../src/Authentification/Routes/auth";

const routes = Router();

routes.use("/auth", auth);

export default routes;