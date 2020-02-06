import { expect } from 'chai';
import User from '../../src/models/User';
import { fullUser } from '../fixtures/UserFixture';

describe('User Model', () => {
  describe('fromJson', () => {
    it('Returns a valid user', () => {
      const user = User.fromJson(fullUser);
      expect(user.userName).to.equal(fullUser.userName);
      expect(user.email).to.equal(fullUser.email);
      expect(user.gender).to.equal(fullUser.gender);
      expect(user.id).to.undefined;
    });
  });
});
