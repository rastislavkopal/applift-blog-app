const httpStatus = require('http-status');
const { _ } = require('lodash');
const Comment = require('../models/comment.model');
const Vote = require('../models/vote.model');
const { checkIsOwnerOfResurce } = require('../utils/helpers/resourceOwner');
const APIError = require('../errors/api-error');

/**
 * Load comment and append to req.
 * @public
 */
exports.load = async (req, res, next, id) => {
  try {
    const comment = await Comment.get(id);
    req.locals = _.assign(req.locals, { comment });
    return next();
  } catch (error) {
    return next(error);
  }
};

/**
 * Get comment
 * @public
 */
exports.get = (req, res) => res.json(req.locals.comment.transform());

/**
 * Create new comment
 * @public
 */
exports.create = async (req, res, next) => {
  try {
    const comment = new Comment(_.assign(req.body, {
      userId: req.user._id,
      articleId: req.locals.article._id,
    }));
    const savedComment = await comment.save();
    res.status(httpStatus.CREATED);
    res.json(savedComment.transform());
  } catch (error) {
    next(error);
  }
};

/**
 * Get comment list
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    const { page, perPage } = req.query;
    const comments = await Comment.find({ articleId: req.locals.article._id })
      .populate('userId').limit(perPage).skip(perPage * (page - 1));
    const transformedComments = comments.map((x) => x.transform());

    res.json(transformedComments);
  } catch (error) {
    next(error);
  }
};

/**
 * Delete comment
 * @public
 */
exports.remove = async (req, res, next) => {
  try {
    const { comment } = req.locals;
    await checkIsOwnerOfResurce(comment.userId._id, req);

    comment.remove()
      .then(() => res.status(httpStatus.NO_CONTENT).end())
      .catch((e) => next(e));
  } catch (error) {
    next(error);
  }
};

/**
 * Vote for a comment
 * @public
 */
exports.addVote = async (req, res, next) => {
  try {
    const { comment } = req.locals;
    const { rating } = req.query;

    const voteCnt = await Vote.count({ userId: req.user._id, commentId: comment._id });
    if (voteCnt !== 0) {
      throw new APIError({
        status: httpStatus.BAD_REQUEST,
        message: 'Unable to perform vote. User already voted.',
      });
    }

    const vote = new Vote(_.assign(req.body, {
      userId: req.user._id,
      rating,
      commentId: comment._id,
    }));
    const savedVote = await vote.save();

    if (rating === 1) {
      await Comment.findOneAndUpdate({ _id: comment._id }, { $inc: { nUpvotes: 1 } });
    } else if (rating === -1) {
      await Comment.findOneAndUpdate({ _id: comment._id }, { $inc: { nDownvotes: 1 } });
    }

    res.status(httpStatus.CREATED);
    res.json(savedVote.transform());
  } catch (error) {
    next(error);
  }
};
