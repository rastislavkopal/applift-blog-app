const httpStatus = require('http-status');
const moment = require('moment-timezone');
const { omit } = require('lodash');
const User = require('../models/user.model');
const { jwtExpirationInterval } = require('../../config/vars');

/**
 * Returns jwt token if registration was successful
 * @public
 */
exports.register = async (req, res, next) => {
  try {
    const userData = omit(req.body, 'role');
    const user = await new User(userData).save();
    const token = {
      tokenType: 'Bearer',
      accessToken: user.token(),
      expiresIn: moment().add(jwtExpirationInterval, 'minutes'),
    };

    res.status(httpStatus.CREATED);
    return res.json({ token, user: user.transform() });
  } catch (error) {
    return next(User.duplicateEmailCheck(error));
  }
};

/**
 * Returns jwt token if valid username and password is provided
 * @public
 */
exports.login = async (req, res, next) => {
  try {
    const { user, accessToken } = await User.findAndGenerateToken(req.body);
    const token = {
      tokenType: 'Bearer',
      accessToken,
      expiresIn: moment().add(jwtExpirationInterval, 'minutes'),
    };

    const userTransformed = user.transform();
    return res.json({ token, user: userTransformed });
  } catch (error) {
    return next(error);
  }
};
