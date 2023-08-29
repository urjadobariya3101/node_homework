const Joi = require("joi");

/** create book */
const createBook = {
  body: Joi.object().keys({
    book_name: Joi.string().required().trim(),
    book_price: Joi.number().required(),
    author_name: Joi.string().required().trim()
  }),
};

/** GEt Book list */
const getBookList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Book details by id */
const getDetails = {
  params: Joi.object().keys({
    bookId: Joi.string().required().trim(),
  }),
};

/**book details update by id */
const updateDetails = {
  params: Joi.object().keys({
    bookId: Joi.string().required().trim()
  }),
  body : Joi.object().keys({
    book_name: Joi.string().required().trim(),
    book_price: Joi.number().required(),
    author_name: Joi.string().required().trim()
  })
}

module.exports = {
  createBook,
  getBookList,
  getDetails,
  updateDetails
};
