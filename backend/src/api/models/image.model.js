const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../errors/api-error');

/**
 * Image Schema
 * @private
 */
const imageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  buffer: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  required: true,
});

/**
 * Methods
 */
imageSchema.method({
  transform() {
    const transformed = {};
    const fields = ['_id', 'articleId', 'buffer', 'name', 'createdAt'];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },
});

/**
 * Statics
 */
imageSchema.statics = {

  /**
   * Get Image
   *
   * @param {ObjectId} id - The objectId of Image.
   * @returns {Promise<Image, APIError>}
   */
  async get(id) {
    let img;

    if (mongoose.Types.ObjectId.isValid(id)) {
      img = await this.findById(id).exec();
    }
    if (img) {
      return img;
    }

    throw new APIError({
      message: 'Image does not exist',
      status: httpStatus.NOT_FOUND,
    });
  },
};

/**
 * @typedef Image
 */
module.exports = mongoose.model('Image', imageSchema);
