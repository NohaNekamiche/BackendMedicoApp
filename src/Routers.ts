import { Router, Request, Response } from "express";
import auth from "../src/Authentification/Routes/auth";
import traitement from "./Traitement/Routes/TraitementRoute";
import  booking  from "./booking/Routes/BookingRoute";
import conseil from './conseil/Routes/ConseilRoute';
import doctor from './doctor/Routes/DoctorRoute';
import  doctorEmploi from "./doctoremploi/Routes/DoctorEmploiRoute";

const routes = Router();

routes.use("/auth", auth);
routes.use("/traitement",traitement);
routes.use('/booking',booking);
routes.use('/conseil',conseil);
routes.use('/doctor',doctor);
routes.use('/doctoremploi',doctorEmploi);

export default routes;