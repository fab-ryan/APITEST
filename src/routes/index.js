import express from 'express';
import userRouter from './userRouter.js';
import authRouter from './authRouter.js';


const route = express.Router();
route.use('/user', userRouter);
route.use('/auth', authRouter);
export default route;

