require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const indexRouter = require('./routes/index');
const errorHandler = require('./utils/errorHandler');
const limiter = require('./middlewares/limiter');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { DEFAULT_PORT, DEFAULT_URL } = require('./utils/config');
const { PRODUCTION } = require('./utils/constants');
const cors = require('./middlewares/cors');

const { PORT, MONGODB_URL, NODE_ENV } = process.env;
const app = express();

mongoose.connect(NODE_ENV === PRODUCTION ? MONGODB_URL : DEFAULT_URL);

app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(limiter);
app.use(cors);

app.use(requestLogger);

app.use('/', indexRouter);

app.use(errorLogger);

app.use(errors());
app.use(errorHandler);

app.listen(NODE_ENV === PRODUCTION ? PORT : DEFAULT_PORT, () => {
  console.log(`App listening on port ${PORT || DEFAULT_PORT}`);
});
