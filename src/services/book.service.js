const { Book } = require("../models");

/**
 * Create book
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createBook = async (reqBody) => {
  return Book.create(reqBody);
};

/**
 * Get book list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getBookList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Book.find(filter).skip(skip).limit(options.limit).select("-password");
};



module.exports = {
  createBook,
  getBookList
};
