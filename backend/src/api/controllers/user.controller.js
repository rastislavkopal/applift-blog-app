const { _ } = require('lodash');
const User = require('../models/user.model');
const Article = require('../models/article.model');

/**
 * Load user and append to req.
 * @public
 */
exports.load = async (req, res, next, id) => {
  try {
    const user = await User.get(id);
    req.locals = _.assign(req.locals, { user });
    return next();
  } catch (error) {
    return next(error);
  }
};

/**
 * Get user
 * @public
 */
exports.get = async (req, res, next) => {
  res.json(req.locals.user.transform());
};

/**
 * Get user list
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    const users = await User.list(req.query);
    const transformedUsers = users.map((user) => user.transform());
    res.json(transformedUsers);
  } catch (error) {
    next(error);
  }
};

/**
 * Get list of user's articles
 * @public
 */
exports.getUsersArticles = async (req, res, next) => {
  try {
    req.query.userId = req.user.id; // add current userId to req.query to be parsed in db query
    const articles = await Article.userArticlesList(req.query);
    const transformedArticles = articles.map((x) => x.transform());
    res.json(transformedArticles);
  } catch (e) {
    next(e);
  }
};
