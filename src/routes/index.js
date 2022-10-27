import express from 'express';
import { Register,getAllUser } from '../controllers/authController.js';
import { createRoles, getRoles } from '../controllers/roleController.js';
const route = express.Router();
// auth routers
route.post('/auth/register', Register);
route.post('/auth/role', createRoles);
route.get('/auth/user',getAllUser)

route.get('/auth/role', getRoles);
export default route;
