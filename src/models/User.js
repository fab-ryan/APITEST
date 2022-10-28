import mongoose from 'mongoose';
const schema = mongoose.Schema;
const User = new schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
    match:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  },
  password: {
    type: String,
    select: false,
  },
  token: {
    type: String,
  },
  create_at: {
    type: Date,
    default: new Date(),
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'role',
  },
});
export default mongoose.model('user', User);
