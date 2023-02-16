const Joi = require('joi');

module.exports = {

  // GET /v1/articles/:id/comments
  listComments: {
    query: {
      page: Joi.number().min(1),
      perPage: Joi.number().min(1).max(100),
    },
  },

  // POST /v1/articles/:id/comments
  createComment: {
    body: {
      text: Joi.string().min(6).max(512).required(),
    },
  },

  // POST /v1/articles/:id/comments/:commentId/vote?rating=1
  addVote: {
    query: {
      rating: Joi.number().min(-1).max(1),
    },
  },
};
