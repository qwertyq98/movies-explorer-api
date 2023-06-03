const LINK_VALIDATOR = /https?:\/\/(www\.)?[\w\W]*\.[a-z\W]{2,3}#?/;

const MOVIE_NOT_FOUND_MESSAGE = 'Фильм не найден';
const MOVIE_FORBIDDEN_MESSAGE = 'Нельзя удалить сохраненный фильм другого пользователя';
const USER_NOT_FOUND_MESSAGE = 'Пользователь не существует';
const SIGNOUT_MESSAGE = 'Осуществлен выход из учетной записи';
const UNAUTHORIZED_MESSAGE = 'Необходима авторизация';
const USER_EMAIL_ERROR_MESSAGE = 'Почта пользователя введена неверно';
const AUTHORIZATION_ERROR_MESSAGE = 'Неправильная почта или пароль';
const URL_NOT_FOUND_MESSAGE = 'Указан несуществующий URL';
const VALIDATION_ERROR_MESSAGE = 'Переданы некорректные данные';
const USER_BAD_ID_MESSAGE = 'Передан некорректный ID пользователя';
const SIGNUP_CONFLICT_MESSAGE = 'Указанный email уже зарегистрирован';
const SERVER_ERROR_MESSAGE = 'Ошибка на сервере';

const ALLOWED_CORS = [
  'http://movies-kapustina.nomoredomains.rocks',
  'https://movies-kapustina.nomoredomains.rocks',
  'https://localhost:3000',
  'http://localhost:3000',
  'https://localhost:3001',
  'http://localhost:3001',
];
const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

module.exports = {
  ALLOWED_CORS,
  DEFAULT_ALLOWED_METHODS,
  LINK_VALIDATOR,
  MOVIE_NOT_FOUND_MESSAGE,
  MOVIE_FORBIDDEN_MESSAGE,
  USER_NOT_FOUND_MESSAGE,
  SIGNOUT_MESSAGE,
  UNAUTHORIZED_MESSAGE,
  USER_EMAIL_ERROR_MESSAGE,
  AUTHORIZATION_ERROR_MESSAGE,
  URL_NOT_FOUND_MESSAGE,
  VALIDATION_ERROR_MESSAGE,
  USER_BAD_ID_MESSAGE,
  SIGNUP_CONFLICT_MESSAGE,
  SERVER_ERROR_MESSAGE,
};
