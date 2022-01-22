import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import userRouter from './routes/user.js';
import transactionRouter from './routes/transaction.js';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/user', userRouter);
app.use('/api/transactions', transactionRouter);

export default app;
