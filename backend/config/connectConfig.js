const connectionConfig = {
    production: {
        user: process.env.PRODUCTION_DB_USER,
        password: process.env.PRODUCTION_DB_PASSWORD,
        database: process.env.PRODUCTION_DB_DATABASE,
        host: process.env.PRODUCTION_DB_HOST,
        connectionLimit: parseInt(process.env.PRODUCTION_DB_CONNECTIONLIMIT),
    },
    test: {
        user: process.env.TEST_DB_USER,
        password: process.env.TEST_DB_PASSWORD,
        database: process.env.TEST_DB_DATABASE,
        host: process.env.TEST_DB_HOST,
        connectionLimit: parseInt(process.env.TEST_DB_CONNECTIONLIMIT),
    },
};

export default connectionConfig;
