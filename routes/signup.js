const signupRouter = require('express').Router();
const { createUserValidation } = require('../middlewares/validation');
const { createUser } = require('../controllers/users');

signupRouter.post('/', createUserValidation, createUser);

module.exports = signupRouter;
