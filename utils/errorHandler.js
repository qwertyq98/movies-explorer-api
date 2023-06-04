const {
  ValidationError,
  DocumentNotFoundError,
  CastError,
} = require('mongoose').Error;

const BaseError = require('../errors/BaseError');
const {
  VALIDATION_ERROR_MESSAGE,
  USER_BAD_ID_MESSAGE,
  SIGNUP_CONFLICT_MESSAGE,
  SERVER_ERROR_MESSAGE,
} = require('./constants');

function errorHandler(err, req, res, next) {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).send({ message: err.message });
  }

  if (err instanceof ValidationError) {
    return res.status(400).send({
      message: VALIDATION_ERROR_MESSAGE,
    });
  }

  if (err instanceof DocumentNotFoundError) {
    return res.status(404).send({
      message: err.message,
    });
  }

  if (err instanceof CastError) {
    return res.status(400).send({
      message: USER_BAD_ID_MESSAGE,
    });
  }

  if (err.code === 11000) {
    return res.status(409).send({
      message: SIGNUP_CONFLICT_MESSAGE,
    });
  }

  res.status(500).send(SERVER_ERROR_MESSAGE);
  return next();
}

module.exports = errorHandler;
