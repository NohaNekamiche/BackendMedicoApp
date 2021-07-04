
import { Router } from "express";
import BookingManager from "../Controllers/BookingManager";


const router=Router();
router.get('/getAllBooking',BookingManager.getAllBooking);
router.post('/addBooking',BookingManager.addBooking);

export default router;