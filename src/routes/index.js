import express from 'express';
import { Register,getAllUser,deleteUser,updateUser,getSingleUser } from '../controllers/authController.js';
import { createRoles, getRoles } from '../controllers/roleController.js';
const route = express.Router();
// auth routers
route.post('/auth/register', Register);
route.post('/auth/role', createRoles);
route.get('/auth/user',getAllUser)
route.delete('/auth/user/:userId',deleteUser)
route.get('/auth/role', getRoles);
route.patch('/auth/user/:userId',updateUser)
route.get('/auth/user/:userId',getSingleUser)

route.get("*",(req,res)=>{
    res.status(404).json({error:'endpoint not found'})
})
route.post("*",(req,res)=>{
    res.status(404).json({error:'endpoint not found'})
})
route.put("*",(req,res)=>{
    res.status(404).json({error:'endpoint not found'})
})
export default route;
