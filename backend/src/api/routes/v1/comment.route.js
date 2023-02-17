const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/comment.controller');
const { authorize } = require('../../middlewares/auth');
const {
  listComments,
  createComment,
  addVote,
} = require('../../validations/comment.validation');

const router = express.Router({ mergeParams: true });

/**
 * Load comment when API with commentId route parameter is hit
 */
router.param('commentId', controller.load);

router
  .route('/')
  /**
   * @api {get} v1/articles/:articleId/comments List Comments
   * @apiDescription Get a list of Comments
   * @apiVersion 1.0.0
   * @apiName ListComments
   * @apiGroup Comments
   * @apiPermission user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [perPage=1]  Users per page
   *
   * @apiSuccess {Object[]} Comment List of Comments.
   */
  .get(authorize(), validate(listComments), controller.list)
  /**
   * @api {post} v1/articles/:articleId/comments Create comment
   * @apiDescription Create a new Comment
   * @apiVersion 1.0.0
   * @apiName CreateComment
   * @apiGroup Comments
   * @apiPermission user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {String}             text      Comment's text
   *
   * @apiSuccess (Created 201) {String}  _id          Comment's id
   * @apiSuccess (Created 201) {String}  text         Comment's text
   * @apiSuccess (Created 201) {String}  userId       User id who added
   * @apiSuccess (Created 201) {String}  articleId    Article id
   * @apiSuccess (Created 201) {Object}  userId       Object of the user who created it
   * @apiSuccess (Created 201) {Number}  nUpvotes     Number of up-votes for the comment
   * @apiSuccess (Created 201) {Number}  nDownvotes     Number of down-votes for the comment
   * @apiSuccess (Created 201) {Date}    createdAt    Timestamp
   *
   * @apiError (Bad Request 400)   ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401)  Unauthorized     Only authenticated users can create the data
   */
  .post(authorize(), validate(createComment), controller.create);

router
  .route('/:commentId')
  /**
   * @api {get} v1/articles/:articleId/comments/:id Get Comment
   * @apiDescription Get Comment information
   * @apiVersion 1.0.0
   * @apiName GetComment
   * @apiGroup Comments
   * @apiPermission user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiSuccess {String}  _id            Comment's id
   * @apiSuccess {String}  text           Comment's text
   * @apiSuccess {Object}  userId         User object  who added the resource
   * @apiSuccess {Object}  articleId      Associated article (creation)
   * @apiSuccess {Number}  nUpvotes       Number of up-votes for the comment
   * @apiSuccess {Number}  nDownvotes     Number of down-votes for the comment
   * @apiSuccess {Date}    createdAt      Timestamp
   *
   * @apiError (Not Found 404)    NotFound     Comment does not exist
   */
  .get(authorize(), controller.get)
  /**
   * @api {patch} v1/articles/:articleId/comments/:id Delete Comment
   * @apiDescription Delete a Comment
   * @apiVersion 1.0.0
   * @apiName DeleteComment
   * @apiGroup Comments
   * @apiPermission user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiSuccess (No Content 204)  Successfully deleted
   *
   * @apiError (Unauthorized 401) Unauthorized  Only authenticated users can delete the data
   * @apiError (Not Found 404)    NotFound      Comment does not exist
   */
  .delete(authorize(), controller.remove);

router
  .route('/:commentId/vote')
  /**
   * @api {post} v1/articles/:articleId/comments Create comment
   * @apiDescription Create a new Comment
   * @apiVersion 1.0.0
   * @apiName CreateComment
   * @apiGroup Comments
   * @apiPermission user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [rating=1]     Rating, positive=1, negative=-1
   *
   * @apiSuccess (Created 201) {String}  _id          Resource id
   * @apiSuccess (Created 201) {String}  userId       User id who added
   * @apiSuccess (Created 201) {String}  commentId    Comment id
   * @apiSuccess (Created 201) {Number}  rating       Either positive or negative rating
   * @apiSuccess (Created 201) {Date}    createdAt    Timestamp
   *
   * @apiError (Bad Request 400)   ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401)  Unauthorized     Only authenticated users can create the data
   */
  .post(authorize(), validate(addVote), controller.addVote);

module.exports = router;
