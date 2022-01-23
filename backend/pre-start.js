import dotenv from 'dotenv';

const dotenvConfig = {
    path: process.env.NODE_ENV === 'development' ? './.env.development' : './.env.production',
};
dotenv.config(dotenvConfig);
