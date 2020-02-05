import { ValidationError } from '@hapi/joi';
import { expect } from 'chai';
import userService from '../../src/user/UserService';
import { fullUser } from '../fixtures/UserFixture';

describe('UserService', () => {
  describe('create', () => {
    it('Creates a valid user', async () => {
      const user = await userService.create(fullUser);
      expect(user.userName).to.equal(fullUser.userName);
      expect(user.email).to.equal(fullUser.email);
      expect(user.gender).to.equal(fullUser.gender);
      expect(user.id).to.not.undefined;
    });

    it('Fails if missing params', async () => {
      try {
        await userService.create({
          email: fullUser.email,
        });
      } catch (error) {
        expect((error as ValidationError).message).to.not.undefined;
      }
    });
  });

  describe('update', () => {
    it('Updates a user', async () => {
      const user = await userService.create(fullUser);
      const updatedUser = await userService.update(user.id, { email: 'test2@test.com' });
      expect(updatedUser.email).to.equal('test2@test.com');
      expect(updatedUser.userName).to.equal(user.userName);
      expect(updatedUser.gender).to.equal(user.gender);
      expect(updatedUser.id).to.equal(user.id);
    });

    it('Fails if invalid params', async () => {
      try {
        await userService.create({
          email: 10,
        });
      } catch (error) {
        expect((error as ValidationError).message).to.not.undefined;
      }
    });
  });

  describe('findOne', () => {
    it('find a user', async () => {
      const user = await userService.create(fullUser);
      const found = await userService.findOne(user.id);
      expect(found.userName).to.equal(user.userName);
      expect(found.email).to.equal(user.email);
      expect(found.gender).to.equal(user.gender);
      expect(found.id).to.equal(user.id);
    });

    it('Returns undefined if not found', async () => {
      const user = await userService.findOne(20);
      expect(user).to.undefined;
    });
  });

  describe('find', () => {
    it('returns a list of users', async () => {
      const user = await userService.create(fullUser);
      const found = await userService.find({ userName: fullUser.userName });
      expect(found).to.not.empty;
    });
  });
});
