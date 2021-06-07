import { Router } from 'express';
import { addUser, get, getUsers } from '../controllers/user';


const router = Router();


router.get('/', get);
router.get('/user', getUsers);
router.post('/user', addUser);



export default router;