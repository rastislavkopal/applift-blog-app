const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../errors/api-error');

/**
 * Comment Schema
 * @private
 */
const commentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  },
  articleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article',
    required: true,
    index: true,
  },
  commentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
  },
  text: {
    type: String,
    maxlength: 512,
    index: 'text',
  },
}, {
  timestamps: true,
});

/**
 * Methods
 */
commentSchema.method({
  transform() {
    const transformed = {};
    const fields = ['_id', 'userId', 'articleId', 'commentId', 'text', 'createdAt'];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    // remove unwanted fields from populated User object
    const user = this.userId;
    const transformedUser = {};
    const userFields = ['_id', 'firstName', 'lastName', 'email'];

    if (this.userId) {
      userFields.forEach((field) => {
        transformedUser[field] = user[field];
      });
    }
    transformed.userId = transformedUser;

    return transformed;
  },
});

/**
 * Statics
 */
commentSchema.statics = {

  /**
   * Get Comment
   *
   * @param {ObjectId} id - The objectId of Comment.
   * @returns {Promise<Comment, APIError>}
   */
  async get(id) {
    let comment;

    if (mongoose.Types.ObjectId.isValid(id)) {
      comment = await this.findById(id).populate('userId').exec();
    }
    if (comment) {
      return comment;
    }

    throw new APIError({
      message: 'comment does not exist',
      status: httpStatus.NOT_FOUND,
    });
  },
};

/**
 * @typedef Comment
 */
module.exports = mongoose.model('Comment', commentSchema);
