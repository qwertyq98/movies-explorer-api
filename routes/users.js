const userRouter = require('express').Router();
const { updateUserValidation } = require('../middlewares/validation');
const {
  updateUser, getUserMeById,
} = require('../controllers/users');

userRouter.get('/me', getUserMeById);

userRouter.patch('/me', updateUserValidation, updateUser);

module.exports = userRouter;
