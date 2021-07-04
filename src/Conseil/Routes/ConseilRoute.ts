import { Router } from "express";


import ConseilController from "../Controllers/ConseilController";

const router=Router();
router.get('/getAllConseil',ConseilController.getAllConseil);
router.post('/addConseil',ConseilController.addConseil);
export default router;
