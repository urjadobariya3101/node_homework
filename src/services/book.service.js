const { Book } = require("../models");

/**
 * Create book
 * @param {object} reqBody
 * @returns {Promise<Book>}
 */
const createBook = async (reqBody) => {
  return Book.create(reqBody);
};

/**
 * Get book list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Book>}
 */
const getBookList = async (filter, options) => {
  // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
  // return Book.find();
  return Book.find({ $or: [{ book_price: 100 }] })
  // return Book.find(filter).skip(skip).limit(options.limit).select("-password");

};

/**
 * Get book details by id
 * @param {ObjectId} bookId
 * @returns {Promise<Book>}
 */
const getBookById = async (bookId) => {
  return Book.findById(bookId);
};

/**
 * Delete book
 * @param {ObjectId} bookId
 * @returns {Promise<Book>}
 */
const deleteBook = async (bookId) => {
  return Book.findByIdAndDelete(bookId);
};

module.exports = {
  createBook,
  getBookList,
  deleteBook,
  getBookById
};
