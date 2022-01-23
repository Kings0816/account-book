import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import userRouter from './routes/user.js';
import transactionRouter from './routes/transaction.js';
import categoryRouter from './routes/category.js';

const app = express();

const corsOption = {
    origin: process.env.CLIENT_HOST,
    credentials: true,
};
app.use(cors(corsOption));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/user', userRouter);
app.use('/api/transactions', transactionRouter);
app.use('/api/categories', categoryRouter);

export default app;
