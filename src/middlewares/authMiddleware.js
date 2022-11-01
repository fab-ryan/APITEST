import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import User from '../models/User.js';

export const isLogin = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, config.secret);
    if (decoded) {
      req.user = decoded;
      next();
    } else {
      res.status(401).json({ message: 'token is not valid' });
    }
  } catch (error) {
    return res.status(401).json({ message: 'unauthorized' });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).populate('role').exec();
    if (user.role.name === 'admin') {
      next();
    } else res.status(401).json({ message: 'ntabwo wemerewe gukomeza' });
  } catch (error) {
    res.status(401).json({ message: 'unauthorized' });
  }
};
