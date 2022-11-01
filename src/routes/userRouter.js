import express from 'express';
import {
  Register,
  getAllUser,
  deleteUser,
  updateUser,
  getSingleUser,
} from '../controllers/userController.js';
import { createRoles, getRoles } from '../controllers/roleController.js';
import { isLogin, isAdmin } from '../middlewares/authMiddleware.js';

const route = express.Router();
// auth routers
route.post('/register', Register);
route.post('/role',isLogin, isAdmin, createRoles);
route.get('/', isLogin, isAdmin, getAllUser);
route.delete('/',isLogin, deleteUser);
route.get('/role', isLogin, isAdmin,getRoles);
route.patch('/',isLogin, updateUser);
route.get('/single',isLogin, getSingleUser);

route.get('*', (req, res) => {
  res.status(404).json({ error: 'endpoint not found' });
});
route.post('*', (req, res) => {
  res.status(404).json({ error: 'endpoint not found' });
});
route.put('*', (req, res) => {
  res.status(404).json({ error: 'endpoint not found' });
});
export default route;
