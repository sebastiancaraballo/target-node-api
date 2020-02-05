import User from '../models/User';

export default ({ userName, email, gender, password, passwordConfirmation, id }: User) => ({
  userName,
  email,
  gender,
  id,
});
