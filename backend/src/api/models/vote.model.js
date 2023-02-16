const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../errors/api-error');

/**
 * Vote Schema
 * @private
 */
const voteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    index: true,
  },
  commentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
    index: true,
  },
  rating: {
    type: Number,
    required: true,
    min: -1,
    max: 1,
  },
}, {
  timestamps: true,
});

/**
 * Methods
 */
voteSchema.method({
  transform() {
    const transformed = {};
    const fields = ['_id', 'userId', 'commentId', 'rating', 'createdAt'];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },
});

/**
 * Statics
 */
voteSchema.statics = {

  /**
   * Get Vote
   *
   * @param {ObjectId} id - The objectId of Vote.
   * @returns {Promise<Vote, APIError>}
   */
  async get(id) {
    let vote;

    if (mongoose.Types.ObjectId.isValid(id)) {
      vote = await this.findById(id).exec();
    }
    if (vote) {
      return vote;
    }

    throw new APIError({
      message: 'Vote does not exist',
      status: httpStatus.NOT_FOUND,
    });
  },
};

/**
 * @typedef Vote
 */
module.exports = mongoose.model('Vote', voteSchema);
