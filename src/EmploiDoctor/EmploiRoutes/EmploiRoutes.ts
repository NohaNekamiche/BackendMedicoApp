import { Router } from "express";


import DoctorEmploiManager from "../Controllers/EmploiController";

const router=Router();
router.get('/getEmploiByIdDoc/:id',DoctorEmploiManager.getEmploiByIdDoc);
router.post('/AddEmploiByIdDoc',DoctorEmploiManager.AddEmploiByIdDoc);
export default router