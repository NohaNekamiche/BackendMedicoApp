import { Router } from "express";


import ConseilManager from "../Controllers/ConseilManager";

const router=Router();
router.get('/getAllConseil',ConseilManager.getAllConseil);
router.post('/addConseil',ConseilManager.addConseil);
export default router;