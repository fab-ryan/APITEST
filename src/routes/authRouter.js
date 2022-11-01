import express from 'express';
import { login } from '../controllers/authController.js';
const route = express.Router();

route.post('/', login);

export default route;
