const Joi = require("joi");

/** create user */
const createBook = {
  body: Joi.object().keys({
    book_name: Joi.string().required().trim(),
    book_price: Joi.string().required().trim(),
    author_name: Joi.string().required().trim(),
  }),
};

/** GEt user list */
const getBookList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

module.exports = {
  createBook,
  getBookList
};
