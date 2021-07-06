import { Router } from "express";
import BookingController from "../Controllers/BookingController";


const router=Router();
router.get('/getAllBooking',BookingController.getAllBooking);
router.get('/getAllBooking',BookingController.getAllBooking);
router.post('/addBooking',BookingController.addBooking);
router.get('/getBookingByIdPatientIdDoc/:IdPatient',BookingController.getBookingByIdPatient);
router.get('/getBookingByIdPatient/:IdPatient',BookingController.getBookingByIdPatient);


export default router;