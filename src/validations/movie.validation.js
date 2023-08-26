const Joi = require("joi");

/** create movie */
const createMovie = {
  body: Joi.object().keys({
    movie_name: Joi.string().required().trim(),
    director_name: Joi.string().required().trim(),
    actor_name: Joi.string().required().trim(),
    actoress_name: Joi.string().required().trim()
  }),
};

/** GEt movie list */
const getMovieList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get movie details by id */
const getDetails = {
  params: Joi.object().keys({
    movieId: Joi.string().required().trim(),
  }),
};

module.exports = {
  createMovie,
  getMovieList,
  getDetails
};
