import jwt from 'jsonwebtoken';
import config from '../config/config.js';
export const AssignToken=(payload)=>{
    const token = jwt.sign(payload, config.secret);
    return token;
}