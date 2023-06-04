const signinRouter = require('express').Router();
const { loginValidation } = require('../middlewares/validation');
const { login } = require('../controllers/users');

signinRouter.post('/', loginValidation, login);

module.exports = signinRouter;
