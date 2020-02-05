import Joi from '@hapi/joi';

const UserSchema = Joi.object().keys({
  userName: Joi.string().required(),
  email: Joi.string().required(),
  gender: Joi.string().required(),
  password: Joi.string().required(),
  passwordConfirmation: Joi.string().required(),
});

const UserUpdateSchema = Joi.object().keys({
  userName: Joi.string(),
  email: Joi.string(),
  gender: Joi.string(),
  password: Joi.string(),
  passwordConfirmation: Joi.string(),
});

export const validateUser = (user: any) => Joi.attempt(user, UserSchema);

export const validateUserUpdate = (user: any) => Joi.attempt(user, UserUpdateSchema);
