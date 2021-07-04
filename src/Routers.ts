import { Router, Request, Response } from "express";
import auth from "../src/Authentification/Routes/auth";
import traitement from "./Traitement/Routes/TraitementRoute";
import  booking  from "./Booking/Routes/BookingRoute";
import conseil from './Conseil/Routes/ConseilRoute';
import doctor from './Doctor/Routes/DoctorRoute';
import  doctorEmploi from "./EmploiDoctor/EmploiRoutes/EmploiRoutes";

const routes = Router();

routes.use("/auth", auth);
routes.use("/traitement",traitement);
routes.use('/booking',booking);
routes.use('/conseil',conseil);
routes.use('/doctor',doctor);
routes.use('/doctoremploi',doctorEmploi);


export default routes;