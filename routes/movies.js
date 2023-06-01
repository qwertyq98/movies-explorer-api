const movieRouter = require('express').Router();
const { createMovieValidation, deleteMovieValidation } = require('../middlewares/validation');
const {
  getMovies, createMovie, deleteMovie,
} = require('../controllers/movies');

movieRouter.get('/', getMovies);
movieRouter.post('/', createMovieValidation, createMovie);
movieRouter.delete('/:movieId', deleteMovieValidation, deleteMovie);

module.exports = movieRouter;
