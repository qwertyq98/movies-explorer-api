const LINK_VALIDATOR = /https?:\/\/(www\.)?[\w\W]*\.[a-z\W]{2,3}#?/;

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
};
