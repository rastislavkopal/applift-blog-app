define({ "api": [
  {
    "type": "post",
    "url": "v1/articles",
    "title": "Create Article",
    "description": "<p>Create a new article</p>",
    "version": "1.0.0",
    "name": "CreateArticle",
    "group": "Article",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..16448",
            "optional": false,
            "field": "text",
            "description": "<p>Article text</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "cz",
              "sk",
              "en"
            ],
            "optional": false,
            "field": "language",
            "description": "<p>Article language</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Article title</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "image",
            "description": "<p>Article image -&gt; {name, buffer}</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Article id</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Id of user who added the article</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of article</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text of article</p>"
          },
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "comments",
            "description": "<p>Number of comments</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Language of article</p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "imageId",
            "description": "<p>Object of an image</p>"
          },
          {
            "group": "Created 201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can create the data</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/article.route.js",
    "groupTitle": "Article"
  },
  {
    "type": "patch",
    "url": "v1/articles/:id",
    "title": "Delete Article",
    "description": "<p>Delete an article</p>",
    "version": "1.0.0",
    "name": "DeleteArticle",
    "group": "Article",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "No Content 204": [
          {
            "group": "No Content 204",
            "optional": false,
            "field": "Successfully",
            "description": "<p>deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can delete the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>article does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/article.route.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "v1/articles/:id",
    "title": "Get Article",
    "description": "<p>Get article information</p>",
    "version": "1.0.0",
    "name": "GetArticle",
    "group": "Article",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Article's id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userId",
            "description": "<p>User object who added the article</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text of article</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of article</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "comments",
            "description": "<p>Number of comments</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "imageId",
            "description": "<p>Object of an image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Language of article</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Article does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/article.route.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "v1/users/:userId/articles",
    "title": "Get list of user's articles",
    "description": "<p>Get list of user's articles</p>",
    "version": "1.0.0",
    "name": "GetUsersArticles",
    "group": "Article",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>List page</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-100",
            "optional": true,
            "field": "perPage",
            "defaultValue": "1",
            "description": "<p>Users per page</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "user",
            "description": "<p>'s List of articles.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can access the data</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/user.route.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "v1/articles",
    "title": "List Articles",
    "description": "<p>Get a list of articles</p>",
    "version": "1.0.0",
    "name": "ListArticles",
    "group": "Article",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>List page (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-100",
            "optional": true,
            "field": "perPage",
            "defaultValue": "1",
            "description": "<p>Users per page (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "articles",
            "description": "<p>List of articles.</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/article.route.js",
    "groupTitle": "Article"
  },
  {
    "type": "put",
    "url": "v1/articles/:id",
    "title": "Replace Article",
    "description": "<p>Replace the whole article document with a new one</p>",
    "version": "1.0.0",
    "name": "ReplaceArticle",
    "group": "Article",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..256",
            "optional": false,
            "field": "title",
            "description": "<p>Article title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..16448",
            "optional": false,
            "field": "text",
            "description": "<p>Article text</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "cz",
              "sk",
              "en"
            ],
            "optional": false,
            "field": "language",
            "description": "<p>Article language</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Article id</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Id of user who added the article</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text of article</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of article</p>"
          },
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "comments",
            "description": "<p>Number of comments</p>"
          },
          {
            "group": "Created 201",
            "type": "Object",
            "optional": false,
            "field": "imageId",
            "description": "<p>Object of an image</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Language of article</p>"
          },
          {
            "group": "Created 201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Authenticated users (owners) can modify the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Article does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/article.route.js",
    "groupTitle": "Article"
  },
  {
    "type": "patch",
    "url": "v1/articles/:id",
    "title": "Update Article",
    "description": "<p>Update some fields of a article document</p>",
    "version": "1.0.0",
    "name": "UpdateArticle",
    "group": "Article",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "TODO",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "TODO",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can modify the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Article does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/article.route.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "v1/auth/login",
    "title": "Login",
    "description": "<p>Get an accessToken</p>",
    "version": "1.0.0",
    "name": "Login",
    "group": "Auth",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token.tokenType",
            "description": "<p>Access Token's type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token.accessToken",
            "description": "<p>Authorization Token</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "token.expiresIn",
            "description": "<p>Access Token's expiration time in miliseconds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.id",
            "description": "<p>User's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.firstName",
            "description": "<p>User's firstName</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.lastName",
            "description": "<p>User's lastName</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.role",
            "description": "<p>User's role</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Incorrect email or password</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/auth.route.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "v1/auth/register",
    "title": "Register",
    "description": "<p>Register a new user</p>",
    "version": "1.0.0",
    "name": "Register",
    "group": "Auth",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..128",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "token.tokenType",
            "description": "<p>Access Token's type</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "token.accessToken",
            "description": "<p>Authorization Token</p>"
          },
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "token.expiresIn",
            "description": "<p>Access Token's expiration time in miliseconds</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "token.timezone",
            "description": "<p>The server's Timezone</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "user.id",
            "description": "<p>User's id</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "user.firstName",
            "description": "<p>User's first name</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "user.lastName",
            "description": "<p>User's last name</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "user.role",
            "description": "<p>User's role</p>"
          },
          {
            "group": "Created 201",
            "type": "Date",
            "optional": false,
            "field": "user.createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/auth.route.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "v1/articles/:articleId/comments",
    "title": "Create comment",
    "description": "<p>Create a new Comment</p>",
    "version": "1.0.0",
    "name": "CreateComment",
    "group": "Comments",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Comment's text</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Comment's id</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Comment's text</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User id who added</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "articleId",
            "description": "<p>Article id</p>"
          },
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "nUpvotes",
            "description": "<p>Number of up-votes for the comment</p>"
          },
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "nDownvotes",
            "description": "<p>Number of down-votes for the comment</p>"
          },
          {
            "group": "Created 201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can create the data</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/comment.route.js",
    "groupTitle": "Comments"
  },
  {
    "type": "post",
    "url": "v1/articles/:articleId/comments",
    "title": "Create comment",
    "description": "<p>Create a new Comment</p>",
    "version": "1.0.0",
    "name": "CreateComment",
    "group": "Comments",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-",
            "optional": true,
            "field": "rating",
            "defaultValue": "1",
            "description": "<p>Rating, positive=1, negative=-1</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Resource id</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User id who added</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "commentId",
            "description": "<p>Comment id</p>"
          },
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Either positive or negative rating</p>"
          },
          {
            "group": "Created 201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can create the data</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/comment.route.js",
    "groupTitle": "Comments"
  },
  {
    "type": "patch",
    "url": "v1/articles/:articleId/comments/:id",
    "title": "Delete Comment",
    "description": "<p>Delete a Comment</p>",
    "version": "1.0.0",
    "name": "DeleteComment",
    "group": "Comments",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "No Content 204": [
          {
            "group": "No Content 204",
            "optional": false,
            "field": "Successfully",
            "description": "<p>deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can delete the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Comment does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/comment.route.js",
    "groupTitle": "Comments"
  },
  {
    "type": "get",
    "url": "v1/articles/:articleId/comments/:id",
    "title": "Get Comment",
    "description": "<p>Get Comment information</p>",
    "version": "1.0.0",
    "name": "GetComment",
    "group": "Comments",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Comment's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Comment's text</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userId",
            "description": "<p>User object  who added the resource</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "articleId",
            "description": "<p>Associated article (creation)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nUpvotes",
            "description": "<p>Number of up-votes for the comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nDownvotes",
            "description": "<p>Number of down-votes for the comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Comment does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/comment.route.js",
    "groupTitle": "Comments"
  },
  {
    "type": "get",
    "url": "v1/articles/:articleId/comments",
    "title": "List Comments",
    "description": "<p>Get a list of Comments</p>",
    "version": "1.0.0",
    "name": "ListComments",
    "group": "Comments",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>List page</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-100",
            "optional": true,
            "field": "perPage",
            "defaultValue": "1",
            "description": "<p>Users per page</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Comment",
            "description": "<p>List of Comments.</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/comment.route.js",
    "groupTitle": "Comments"
  },
  {
    "type": "get",
    "url": "v1/users/:id",
    "title": "Get User",
    "description": "<p>Get user information</p>",
    "version": "1.0.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User's role</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only user with same id or admins can access the data</p>"
          }
        ],
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/user.route.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "v1/users",
    "title": "List Users",
    "description": "<p>Get a list of users</p>",
    "version": "1.0.0",
    "name": "ListUsers",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>List page</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-100",
            "optional": true,
            "field": "perPage",
            "defaultValue": "1",
            "description": "<p>Users per page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "user",
              "admin"
            ],
            "optional": true,
            "field": "role",
            "description": "<p>User's role</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of users.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Unauthorized 401": [
          {
            "group": "Unauthorized 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the data</p>"
          }
        ],
        "Forbidden 403": [
          {
            "group": "Forbidden 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can access the data</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/user.route.js",
    "groupTitle": "User"
  }
] });
