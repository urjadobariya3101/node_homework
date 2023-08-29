const { Movie } = require("../models");

/**
 * Create Movie
 * @param {object} reqBody
 * @returns {Promise<Movie>}
 */
const createMovie = async (reqBody) => {
  return Movie.create(reqBody);
};

/**
 * Get Movie list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Movie>}
 */
const getMovieList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  // return Movie.find(filter).skip(skip).limit(options.limit).select("-password");
  return Movie.find({$or : [{"director_name" : "Vikram Kumar"}]})
};

/**
 * Get movie details by id
 * @param {ObjectId} movieId
 * @returns {Promise<Movie>}
 */
const getMovieById = async (movieId) => {
  return Movie.findById(movieId);
};

/**
 * Delete Movie
 * @param {ObjectId} movieId
 * @returns {Promise<Movie>}
 */
const deleteMovie = async (movieId) => {
  return Movie.findByIdAndDelete(movieId);
};

/**
 * update movie
 * @param {ObjectId} movieId
 * @param {object} updateBody
 * @returns {Promise<Movie>}
 */
const updateDetails = async (movieId, updateBody) => {
  return Movie.findByIdAndUpdate(movieId, {$set : {updateBody}})
};

const getMovieByName = async (movie_name) => {
  return Movie.findOne({ movie_name });
};

module.exports = {
  createMovie,
  getMovieList,
  deleteMovie,
  getMovieById,
  updateDetails,
  getMovieByName
};
