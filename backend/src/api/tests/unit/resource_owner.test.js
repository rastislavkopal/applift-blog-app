const { expect } = require('chai');
const { checkIsOwnerOfResurce } = require('../../utils/helpers/resourceOwner');

/*
 * Helper function to test async throws
 */
const expectThrowsAsync = async (method, errorMessage) => {
  let error = null;
  try {
    await method();
  } catch (err) {
    error = err;
  }

  expect(error).to.be.an('Error');
  if (errorMessage) {
    expect(error.message).to.equal(errorMessage);
  }
};

describe('resourcerOwner unit tests', () => {
  const someUserId = 'user1111';
  const requestUser = {
    user: {
      _id: someUserId,
      role: 'user',
    },
  };

  const requestAdmin = {
    user: {
      _id: someUserId,
      role: 'admin',
    },
  };

  describe('Test resource owner check', () => {
    it('Should not throw error, if ids are same', () => {
      expect(() => {
        checkIsOwnerOfResurce(someUserId, requestUser);
      }).to.not.throw();
    });

    it('Should not throw error, if ids are not same, but user is admin', () => {
      expect(() => {
        checkIsOwnerOfResurce('someUserId', requestAdmin);
      }).to.not.throw();
    });

    it('Should throw error, if ids are not same, and user is not admin', async () => {
      await expectThrowsAsync(() => checkIsOwnerOfResurce('someUserId', requestUser));
    });
  });
});
