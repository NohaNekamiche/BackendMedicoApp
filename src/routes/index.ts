import { Router } from 'express';
import { addUser, get, getUsers } from '../controllers/user';
import { getDoctorsBySpeciality,getDoctors } from '../controllers/Doctor';


const router = Router();


router.get('/', get);
router.get('/user', getUsers);
router.post('/user', addUser);
router.get('/Doctor',getDoctorsBySpeciality);
router.get('/Doctor',getDoctors);



export default router;