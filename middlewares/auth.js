const { SECRET_KEY, NODE_ENV } = process.env;
const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');
const { DEV_KEY, PRODUCTION } = require('../utils/config');
const { UNAUTHORIZED_MESSAGE } = require('../utils/constants');

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  let payload;

  if (!token) {
    return next(new UnauthorizedError(UNAUTHORIZED_MESSAGE));
  }

  try {
    payload = jwt.verify(token, NODE_ENV === PRODUCTION ? SECRET_KEY : DEV_KEY);
  } catch (err) {
    return next(new UnauthorizedError(UNAUTHORIZED_MESSAGE));
  }

  req.user = payload; // записываем пейлоуд в объект запроса
  return next(); // пропускаем запрос дальше
};
