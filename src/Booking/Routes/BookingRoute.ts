import { Router } from "express";
import BookingController from "../Controllers/BookingController";


const router=Router();
router.get('/getAllBooking',BookingController.getAllBooking);
router.post('/addBooking',BookingController.addBooking);
router.get('/getBookingByIdPatient/:IdPatient',BookingController.getBookingByIdPatient);


export default router;