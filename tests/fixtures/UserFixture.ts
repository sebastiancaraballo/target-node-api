import faker from 'faker';

let genders = [ 'female' , 'male' ];

export const fullUser = {
  userName: faker.internet.userName(),
  email: faker.internet.email().toString(),
  gender: faker.random.arrayElement(genders),
  password: 'password',
  passwordConfirmation: 'password'
};
