const indexRouter = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const signupRouter = require('./signup');
const signinRouter = require('./signin');
const signoutRouter = require('./signout');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFoundError');

indexRouter.use('/signup', signupRouter);
indexRouter.use('/signin', signinRouter);

indexRouter.use(auth);

indexRouter.use('/signout', signoutRouter);
indexRouter.use('/movies', movieRouter);
indexRouter.use('/users', userRouter);
indexRouter.use('*', (req, res, next) => {
  next(new NotFoundError('Запрошен несуществующий роут'));
});

module.exports = indexRouter;
