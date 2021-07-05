import { Router } from "express";


import DoctorEmploiManager from "../Controllers/EmploiController";

const router=Router();
router.get('/getEmploiByIdDoc/:id',DoctorEmploiManager.getEmploiByIdDoc);
router.post('/AddEmploiByIdDoc',DoctorEmploiManager.AddEmploiByIdDoc);
router.delete('/deleteEmploiLibre/:IdDoc/:jourlibre/:moi/:heurelibre',DoctorEmploiManager.deleteEmploiLibre);

export default router