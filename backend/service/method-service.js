import pool from '../database/connection.js';

const getMethods = async () => {
    const sql = `SELECT id, name FROM method`;
    const [row] = await pool.query(sql);
    return row;
};

export default {
    getMethods,
};
