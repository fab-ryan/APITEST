import joi from 'joi';

const authValidation = (data) => {
  const AuthSchema = joi.object({
    email: joi.string().min(6).required().email().message({
      'string.empty': 'email is required',
      'string.min': 'email must be at least 6 characters long',
    }),
    password: joi.string().min(6).required(),
  });
  return AuthSchema.validate(data);
};

export default authValidation;
