import { Router } from "express";
import doctorManager from "../Controllers/DoctorController";


const router=Router();
router.get('/getDoctors',doctorManager.getDoctors);
router.get('/getDoctorsBySpeciality/:spec',doctorManager.getDoctorsBySpeciality);
router.get('/getDoctorById/:idDoc',doctorManager.getDoctorById);
router.post('/addDoctor',doctorManager.addDoctor);

export default router;