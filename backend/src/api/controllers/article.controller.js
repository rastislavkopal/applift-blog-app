const httpStatus = require('http-status');
const { _ } = require('lodash');
const Article = require('../models/article.model');
const Image = require('../models/image.model');
const { checkIsOwnerOfResurce } = require('../utils/helpers/resourceOwner');

/**
 * Load article and append to req.
 * @public
 */
exports.load = async (req, res, next, id) => {
  try {
    const article = await Article.get(id);
    req.locals = _.assign(req.locals, { article });
    return next();
  } catch (error) {
    return next(error);
  }
};

/**
 * Get article
 * @public
 */
exports.get = (req, res) => res.json(req.locals.article.transform());

/**
 * Create new article
 * @public
 */
exports.create = async (req, res, next) => {
  try {
    const { image } = req.body;

    const imageObj = new Image({
      name: image.name,
      buffer: image.buffer,
    });
    await imageObj.save();

    const article = new Article(_.assign(req.body, { userId: req.user.id, imageId: imageObj._id }));
    const savedArticle = await article.save();
    savedArticle.imageId = imageObj;

    res.status(httpStatus.CREATED);
    res.json(savedArticle.transform());
  } catch (error) {
    next(error);
  }
};

/**
 * Replace existing article
 * @public
 */
exports.replace = async (req, res, next) => {
  try {
    const { article } = req.locals;
    const newArticle = new Article(req.body);

    await checkIsOwnerOfResurce(article.userId._id, req);

    const newArticleObject = _.omit(newArticle.toObject(), ['_id']);
    await article.updateOne(newArticleObject, { override: true, upsert: true });
    const savedArticle = await Article.get(article._id);

    res.json(savedArticle.transform());
  } catch (error) {
    next(error);
  }
};

/**
 * Update existing article
 * @public
 */
exports.update = async (req, res, next) => {
  try {
    const { article } = req.locals;
    await checkIsOwnerOfResurce(article.userId._id, req);

    const newArticle = Object.assign(req.locals.article, req.body);

    newArticle.save()
      .then((savedArticle) => res.json(savedArticle.transform()))
      .catch((e) => next(e));
  } catch (error) {
    next(error);
  }
};

/**
 * Get article list
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    const { page, perPage } = req.query;
    const articles = await Article.find()
      .populate('imageId').populate('userId')
      .limit(perPage)
      .skip(perPage * (page - 1));
    const transformedArticles = articles.map((x) => x.transform());

    res.json(transformedArticles);
  } catch (error) {
    next(error);
  }
};

/**
 * Delete article
 * @public
 */
exports.remove = async (req, res, next) => {
  try {
    const { article } = req.locals;
    await checkIsOwnerOfResurce(article.userId._id, req);

    article.remove()
      .then(() => res.status(httpStatus.NO_CONTENT).end())
      .catch((e) => next(e));
  } catch (error) {
    next(error);
  }
};
