import { Router } from "express";


import ConseilController from "../Controllers/ConseilController";

const router=Router();
router.get('/getAllConseil',ConseilController.getAllConseil);
router.post('/addConseil',ConseilController.addConseil);
router.post('/addLocal',ConseilController.addLocal);
router.get('/getConseilsByIdPatient/:idPatient',ConseilController.getConseilsByIdPatient);

export default router;
