import User from '../models/User.js';
import AuthValidation from '../validation/authValidation.js';
import bcrypt from 'bcryptjs';
import { AssignToken } from '../utils/token.js';

const login = async (req, res) => {
  const { error } = AuthValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(400).json({ message: 'email or password is wrong' });
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (validPassword) {
      const token = AssignToken({ id: user._id });
      res.json({ token: token });
    } else {
      return res.status(400).json({ message: 'email or password is wrong' });
    }
  } catch (error) {
    res.status(400).json('bad request');
  }
};


export { login };
