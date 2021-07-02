import { Router } from 'express';

import { getDoctorsBySpeciality,getDoctors } from '../controllers/Doctor';
import {  get, getUsers } from '../controllers/user';


const router = Router();


router.get('/', get);

router.get('/user', getUsers);
router.get('/Doctor',getDoctorsBySpeciality);
router.get('/Doctor',getDoctors);

router.get('/allUser', getUsers);
//router.post('/user', addUser);




export default router;