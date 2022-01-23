import mysql from 'mysql2';
import connectionConfig from '../config/connectConfig.js';

const connection = mysql.createPool(connectionConfig.production);
const pool = connection.promise();

export default pool;
