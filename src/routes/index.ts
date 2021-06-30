import { Router } from 'express';
import {  get, getUsers } from '../controllers/user';


const router = Router();


router.get('/', get);
router.get('/allUser', getUsers);
//router.post('/user', addUser);



export default router;