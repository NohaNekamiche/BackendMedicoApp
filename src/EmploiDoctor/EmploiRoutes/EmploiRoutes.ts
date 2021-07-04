import { Router } from "express";


import DoctorEmploiManager from "../Controllers/EmploiController";

const router=Router();
router.get('/getEmlpoByIdDoc:id',DoctorEmploiManager.getEmlpoByIdDoc);
router.post('/AddEmploiByIdDoc',DoctorEmploiManager.AddEmploiByIdDoc);
export default router