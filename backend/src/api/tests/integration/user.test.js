/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-expressions */
// const request = require('supertest');
// const httpStatus = require('http-status');
// const { expect } = require('chai');
// const app = require('../../../index');
const User = require('../../models/user.model');

/**
 * root level hooks
 */

describe('Users API', async () => {
  // let adminAccessToken;
  // let userAccessToken;
  let dbUsers;
  // let user;
  // let admin;

  // const password = '123456';

  beforeEach(async () => {
    // admin = {
    //   email: 'matus.knd@gmail.com',
    //   password,
    //   name: 'Matus Knd',
    //   firstName: 'Matus',
    //   lastName: 'Knd',
    //   role: 'admin',
    // };

    await User.deleteMany({});
    await User.insertMany([dbUsers.branStark, dbUsers.jonSnow]);
    // adminAccessToken = (await User.findAndGenerateToken(dbUsers.branStark)).accessToken;
  });

  describe('POST /v1/users', () => {
    // it('', () => {
    //   return request(app)
    //     .post('/v1/users')
    //     .set('Authorization', `Bearer ${adminAccessToken}`)
    //     .send(admin)
    //     .expect(httpStatus.CREATED)
    //     .then((res) => {
    //       delete admin.password;
    //       expect(res.body).to.include(admin);
    //     });
    // });
  });
});
