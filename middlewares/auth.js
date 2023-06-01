const { SECRET_KEY, NODE_ENV } = process.env;
const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');
const { DEV_KEY, PRODUCTION } = require('../utils/config');

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  let payload;

  if (!token) {
    return next(new UnauthorizedError('Необходима авторизация'));
  }

  try {
    payload = jwt.verify(token, NODE_ENV === PRODUCTION ? SECRET_KEY : DEV_KEY);
  } catch (err) {
    return next(new UnauthorizedError('Необходима авторизация'));
  }

  req.user = payload; // записываем пейлоуд в объект запроса
  return next(); // пропускаем запрос дальше
};
