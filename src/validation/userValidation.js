import joi from 'joi';
import { joiPasswordExtendCore } from 'joi-password';
const joiPassword = joi.extend(joiPasswordExtendCore);
const UserValidation = (data) => {
  const shema = joi.object({
    name: joi.string().min(3).max(30).required(),
    email: joi
      .string()
      .email()
      .required()
      .regex(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      ),
    password: joiPassword
      .string()
      .minOfSpecialCharacters(1)
      .minOfLowercase(4)
      .minOfUppercase(1)
      .minOfNumeric(2)
      .noWhiteSpaces()
      .messages({
        'password.minOfUppercase':
          '{#label} should contain at least {#min} uppercase character',
        'password.minOfSpecialCharacters':
          '{#label} should contain at least {#min} special character',
        'password.minOfLowercase':
          '{#label} should contain at least {#min} lowercase character',
        'password.minOfNumeric':
          '{#label} should contain at least {#min} numeric character',
        'password.noWhiteSpaces': '{#label} should not contain white spaces',
      }).required(),
    confimPassword: joi.ref('password'),
  });
  return shema.validate(data);
};

export default UserValidation;
